---
title: AWS cloudfront and API Gateway with Django
date: 2025-02-19
tags: blog
layout: layouts/Blog.tsx
---

If you are hosting a web app on AWS you should be putting a Cloudfront instance in front of it. There are a few advantages but at the end of the day it's cheaper, allows for global caching at the edge and provides a fairly straight forward way to obtain SSL certificates. In my own hosting of apps I will more often than not use API gateway in front of Django too as this gives you some nice tools such as rate limiting and whatnot. But it seems really annoying and difficult to get it all working with a Django app given Django's security model around the allowed hosts.

<!--more-->

I had a few goes at this and thought it might be fairly straight forward but it turns out AWS needs it's own host headers for integration purposes if you are using cloudfront and API Gateway. As such we need to do a little bit of faff to get the host header over the Django.

Firstly on the application side we need to tell Django to use the `x-forwarded-host` header to for host checks in the `ALLOWED_HOSTS` setting. This is necessary if we are integrating into API Gateway or Lambda URLs since the host header is expected to be the domain of the cloudfront distribution.

```python
ALLOWED_HOSTS = ["yourdomain.com"]
USE_X_FORWARDED_HOST = True
```

Secondly we need to actually forward the host through using the `x-forwarded-host` header. Cloudfront has no native setting to do this for us so we need to use a cloudfront function. It's not particularly complicated but does introduce another resource to manage.

```javascript
function handler(event) {
  const request = event.request;
  request.headers["x-forwarded-host"] = { value: request.headers.host.value };
  return request;
}
```

Thirdly we need to connect to our integration. Below is a CDK representation of what that would look like. It's important to note that there are a number of native [cloudfront CDK integrations](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cloudfront_origins-readme.html) in to various AWS services. In my particular case I'm using API Gateway HTTP Endpoints which are somewhat simpler than the old REST Endpoints but you do have to do a little bit of work yourself.

```typescript
const forwardHostHeader = new cloudfront.Function(
  this,
  "ForwardHeaderCfFunction",
  {
    code: cloudfront.FunctionCode.fromFile({
      // Filename of the above cloudfront function code
      filePath: "./lib/forwardHostFunction.js",
    }),
    runtime: cloudfront.FunctionRuntime.JS_2_0,
  }
);

const cachePolicy = new cloudfront.CachePolicy(this, "CachePolicy", {
  cookieBehavior: cloudfront.CacheCookieBehavior.all(),
  queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
});

const distribution = new cloudfront.Distribution(
  this,
  "CloudfrontDistribution",
  {
    domainNames: ["your-domain-name.com"],
    defaultBehavior: {
      // This could be a load balancer or an API gateway
      // or any number of AWS services.
      origin: new origins.HttpOrigin(
        `internalAWSdomain.com`
      ),
      functionAssociations: [
        {
          function: forwardHostHeader,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }
      ]
      cachePolicy,
      originRequestPolicy:
        cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
      allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      viewerProtocolPolicy:
        cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    },
  }
);
```

In terms of the cloudfront distribution itself there are some extra configurations that we need to add on the defaults to make our Django application work as expected.

- We need to allow all http methods. By default cloudfront only allows GET and OPTIONS, any writable http requests need to be explicitly allowed.
- We need to be aware of the caching strategy. By default the AWS predefined CACHE OPTIMIZED strategy doesn't take into account cookies or query strings. In your typical django project we'll need both included to address user accounts and list views among other things.
- We need to avoid forwarding the original host header through to API Gateway. This will break integrations and basically get a permission denied error so we use the `ALL_VIEWER_EXCEPT_HOST_HEADER` managed policy.

With all this in place the host header should flow from cloudfront all the way through to our application using the `x-forwarded-host` header and we should be able to set the `ALLOWED_HOSTS` Django setting to our original URL.

Annoyingly I feel like none of this is particularly clear in the AWS docs, the only reference I could find to it was in the [managed origin request policies page](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html#managed-origin-request-policy-all-viewer-except-host-header) which calls out specifically API Gateway and Lambda function URLs as requiring this header.
