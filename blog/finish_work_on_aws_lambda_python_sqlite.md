---
title: Finishing Work On Docker Image aws-lambda-python-sqlite
date: 2023-11-07
tags: blog
layout: layouts/Blog.tsx
---

AWS now has [preview support for python 3.12 in their lambda docker images](https://gallery.ecr.aws/lambda/python). They are built on the new Amazon Linux 2023 base images and as such stop the need for my hacky image [`aws-lambda-python-sqlite`](https://hub.docker.com/r/lukewiwa/aws-lambda-python-sqlite).

<!--more-->

The reason I built the image `aws-lambda-python-sqlite` was because the base image didn't support a version of sqlite high enough for Django. Happily the new base images have a more up to date version and this means support for python 3.12 in `aws-lambda-python-sqlite` will not come. It's been a fun little project and I'll keep the build pipeline going for a while yet but there will be no new python version support.
