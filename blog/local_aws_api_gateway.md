---
title: Local AWS API Gateway
tags: blog
layout: layouts/Blog.tsx

date: 2021-02-20
---

Many smart people both inside and outside of Amazon have been working hard to make local development of AWS lambda functions more accessible. There does however seem to be a missing link to using lambdas as http endpoints.

<!--more-->

There are tools to make AWS lambda functions work locally and also to mock an AWS API Gateway request and response. The most prominent being the [AWS SAM local commands](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-start-api.html) (interestingly implemented using a local flask server) and the [serverless framework offline plugins](https://www.serverless.com/plugins/serverless-offline/) (this one uses a hapi server). They do a pretty good job but it does mean that you have to buy in to the entire ecosystem of those tools. On the other side of the coin AWS has started supporting lambda functions in docker containers and even made [local testing possible](https://docs.aws.amazon.com/lambda/latest/dg/images-test.html).

These tools are great but they definitely become cumbersome if you want to add resources that don't have the requisite plugins. I prefer to use a docker-compose file to run resources locally for testing and there doesn't seem to be any containers that will mock this relationship between API Gateway and lambda functions (tweet me if I'm wrong about this). So I made my own.

I created a [AWS API Gateway container](https://hub.docker.com/repository/docker/lukewiwa/local-lambda-api-gateway) to mock a simple HTTP Proxy call. It basically mimics what a default integration will output for you if you were to create this lambda and API Gateway route via clickops. Admittedly this is a real kludge and I'm happy to accept any PRs or issues at the [github repo](https://github.com/lukewiwa/local-lambda-api-gateway). Below is an example of how you might plug this docker container into a docker-compose file.

```yaml
version: "3"

services:

  frontend:
    image: node
    # Extra args

  api-gateway:
    image: local-lambda-api-gateway
    environment:
      LAMBDA_HOST: cloud-function
      LAMBDA_PORT: 8080

  cloud-function:
    image: public.ecr.aws/lambda/nodejs
    command: /lambda-entrypoint.sh index.handler
    # extra args
```
