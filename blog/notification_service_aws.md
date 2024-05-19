---
title: Personal Notifications Using AWS

date: 2022-02-11
tags: blog
layout: layouts/Blog.tsx
---

I've found quite a few uses for recurring and scheduled scripts in my personal life. In days gone by I would have run these in a cron job on a server somewhere but as I've gotten into the weeds of AWS infrastructure I've leant on some AWS services more for these little personal conveniences. My preference nowadays is to use AWS Lambda as my first point of call and integrate other services as I need them. I'm very confident that AWS won't be deprecating their Lambda platform and they connect well to Cloudwatch, meaning I don't have to worry about creating a logging solution. Additionally now that I'm pretty confident with the AWS CDK for spinning up infrastructure it's a breeze to connect other services to assist with any other needs. Today I'll go through one example which provided a flexible and **cheap** solution to my problem.

<!--more-->

It can be quite difficult to find a good sports massage service and I've recently been very lucky to find a fantastic one. Of course they are booked out months in advance, which doesn't bother me too much but sometimes after a big training session I'll need something worked on sooner rather than later. Appointments do pop up from time to time due to cancellations but I didn't really want to keep checking their website throughout the day. So it made sense to automate the process somewhat.

Firstly the code for the lambda. Fairly easy to test locally (minus the SNS dispatch), I've abridged a few things here but you get the idea. Basically it performs a GET request to the API endpoint for appointments available, if the response array has anything in it send an SMS message to all subscribers.

```typescript
import axios from "axios";
import { DateTime } from "luxon";
import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";
import { URL, URLSearchParams } from "url";
import { EventBridgeHandler } from "aws-lambda";

interface MonthYearProps {
  month: number;
  year: number;
  days?: number[];
}

interface ResponseAppointment {
  day: number;
  day_parts: 1 | 2 | 3;
}

const region = process.env.AWS_REGION;
const TopicArn = process.env.TOPIC_ARN;
const apiEndpointUrl = process.env.API_ENDPOINT_URL

const nextMonths = Array(2)
  .fill(DateTime.now().setZone("Australia/Canberra"))
  .map((date: DateTime, index) => date.plus({ months: index }));

const apiEndpoint = ({ month, year }: MonthYearProps) => {
  const endpoint = new URL(apiEndpointUrl);
  const searchParams = new URLSearchParams({
    month: month.toString(),
    year: year.toString(),
  });
  endpoint.search = searchParams.toString();

  return endpoint.href;
};

const sendNotification = async ({ month, year, days }: MonthYearProps) => {
  const client = new SNSClient({ region });
  const dates = days.map((day) => `${day}/${month}/${year}`).join(", ");
  const message = `Appointments available: ${dates}`;
  const command = new PublishCommand({
    Subject: "Appointments available",
    Message: message,
    TopicArn,
  });
  await client.send(command);
};

export const handler: EventBridgeHandler<string, unknown, void> = () => {
  nextMonths.forEach(async ({ month, year }) => {
    try {
      const { data }: { data: ResponseAppointment[] } = await axios.get(
        apiEndpoint({ month, year })
      );
      if (data.length !== 0) {
        const days = data.map(({ day }) => day);
        await sendNotification({ month, year, days });
      } else {
        console.log(`No appointments found on ${month}/${year}`);
      }
    } catch (error) {
      console.error(error);
    }
  });
};
```

Now let's build the infrastructure around it. I've pretty much standardised on AWS CDK for deployment since it does a great job of holding your hand and creating a lot of the interlinking IAM permissions for you. There's only a few things going on here.

1. Create an SNS topic.
2. Create a lambda function and point it to the above code, we need to wait for the SNS topic to finish being created since we're sending the SNS topic ARN to the lambda function in the form of an environment variable.
3. Grant permissions using the convenience method `grantPublish`.
4. Subscribe any emails (mine) to the topic.
5. Schedule the lambda on a recurring basis. I chose once every hour during business hours to not spam either my own email or the booking website.


```typescript
import {
  Stack,
  StackProps,
  aws_sns as sns,
  aws_lambda as lambda,
  aws_logs as logs,
  aws_sns_subscriptions as subscriptions,
  aws_events as events,
  aws_events_targets as targets,
} from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "path";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const emails = process.env.EMAILS?.split(",") ?? [];

    const topic = new sns.Topic(this, "WiwaNotificationsTopic", {
      displayName: "Available Appointments",
    });

    const fn = new NodejsFunction(this, "WiwaNotificationsLambda", {
      entry: path.join(__dirname, "..", "..", "src", "index.ts"),
      description: "Check booking site for open appointments",
      environment: {
        TOPIC_ARN: topic.topicArn,
      },
      runtime: lambda.Runtime.NODEJS_14_X,
      logRetention: logs.RetentionDays.ONE_WEEK,
    });

    fn.node.addDependency(topic);
    topic.grantPublish(fn);

    emails.forEach((email) => {
      topic.addSubscription(new subscriptions.EmailSubscription(email));
    });

    const rule = new events.Rule(
      this,
      "WiwaNotificationsScheduleRule",
      {
        schedule: events.Schedule.cron({ minute: "24", hour: "0-8,20-23" }),
        description: "Check every hour during the day",
      }
    );
    rule.addTarget(new targets.LambdaFunction(fn));
  }
}
```

And that's it! This now sends me open bookings which probably pop up once or twice a week. It's a nice little piece of functionality which lives well within the free tier limits of AWS.
