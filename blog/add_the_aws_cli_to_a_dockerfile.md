---
title: Add the AWS CLI to a Dockerfile
date: 2021-04-25
tags: blog
layout: layouts/Blog.tsx
---

Using the magic of multi-stage builds using [external images](https://docs.docker.com/develop/develop-images/multistage-build/#use-an-external-image-as-a-stage) and Amazon's official aws cli [docker image](https://hub.docker.com/r/amazon/aws-cli) it's actually pretty easy to add the AWS CLI to a huge amount of containers.

<!--more-->

I haven't tested this on every single docker image out there but for my needs this is a quick and easy way to add the AWS CLI. Configuration can be done using environment variables so no need for mucking around with config files.

```dockerfile
ARG IMAGE
FROM ${IMAGE}

# Install AWS CLI
COPY --from=amazon/aws-cli:latest /usr/local/aws-cli/ /usr/local/aws-cli/
RUN ln -s /usr/local/aws-cli/v2/current/bin/aws \
        /usr/local/bin/aws && \
    ln -s /usr/local/aws-cli/v2/current/bin/aws_completer \
        /usr/local/bin/aws_completer
```
