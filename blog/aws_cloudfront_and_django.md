---
title: AWS cloudfront and Django
date: 2025-02-19
tags: blog
layout: layouts/Blog.tsx
---

If you are hosting a web app on AWS you should be putting a Cloudfront instance in front of it. There are a few advantages but at the end of the day it's cheaper, allows for global caching at the edge and provides a fairly straight forward way to obtain SSL certificates. But it seems really annoying and difficult to get it working with a Django app given Django's security model around the allowed hosts.

<!--more-->

I had a few goes at this and at first did a complicated version that used `x-forwarded-host` headers and cloudfront functions but turns out the solution is somewhat simpler. We really need to keep three things in mind here.

First is that we need to allow all http methods. By default cloudfront only allows GET and OPTIONS, any writable http requests need to be explicitly allowed.

Secondly we need to be aware of the caching strategy. By default the AWS predefined CACHE OPTIMIZED strategy doesn't take into account cookies or query strings. In your typical django project we'll need both included to address user accounts and list views among other things.

Finally to forward the original domain header through to the django application we need to use the origin request policy to `ALL_VIEWER_EXCEPT_HOST_HEADER`. Then we can set the domain in django settings in `ALLOWED_HOSTS` and the application should work as expected. There is a predefined AWS origin request policy named `ALL_VIEWER` but that will send through the host header as the cloudfront distribution domain and Django will error out with an unexpected host header error.

I believe this cloudfront configuration should work for any origin that cloudfront is setup against but I've only really tested it with API Gateway. Below is a CDK representation of this configuration.

```typescript

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
      // or any number of AWS services
      origin: new origins.HttpOrigin(
        `internalAWSdomain.com`
      ),
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