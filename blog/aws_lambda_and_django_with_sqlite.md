---
title: AWS Lambda and Django With Sqlite
date: 2022-07-29
tags: blog
layout: layouts/Blog.tsx
---

Running Django on AWS Lambda has become fairly mainstream and there are many tools to assist with this goal. There is however a pain point which is admittedly not a conventional use case but a possible use case none the less. Django supports a version of sqlite that is above the current version supported on the underlying operating systems of the AWS python lambda implementation. If you're interested lambda functions run on Amazon Linux 1 and 2 which are based on CentOS 6 and 7 respectively.

<!--more-->

There are a few ways to get around this, all of them involving either building the source yourself or standing on the shoulders of [other people who already have](https://github.com/FlipperPA/django-s3-sqlite/). Some people have created [lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add the required libraries.

With lambda now supporting container images I thought an easy thing to do would be to precompile sqlite inside the image. Using the magic of [multi-stage build](https://docs.docker.com/develop/develop-images/multistage-build/) the final image won't even have the build tools which cuts down on image size. Here's an example:

```dockerfile
FROM public.ecr.aws/lambda/python:${PYTHON_VERSION} as build

WORKDIR /sqlite/

RUN yum groupinstall "Development Tools" -y && \
    yum install -y tcl

RUN curl -sSL https://www.sqlite.org/src/tarball/sqlite.tar.gz?r=release \
        --output ./sqlite.tar.gz && \
    tar xzf sqlite.tar.gz

WORKDIR /sqlite/bld
RUN sh ../sqlite/configure && make


FROM public.ecr.aws/lambda/python:${PYTHON_VERSION}

COPY --from=build sqlite/bld/.libs/libsqlite3.so.0 /var/lang/lib/libsqlite3.so.0
COPY --from=build sqlite/bld/.libs/libsqlite3.so.0.8.6 /var/lang/lib/libsqlite3.so.0.8.6
```

You can see the source at [github](https://github.com/lukewiwa/aws-lambda-python-sqlite) and pull the final product from [dockerhub](https://hub.docker.com/r/lukewiwa/aws-lambda-python-sqlite). I've set up monthly builds so hopefully things keep up to date for a while.
