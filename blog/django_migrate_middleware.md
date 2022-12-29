---
title: Django Migrate Middleware
date: 2022-12-28
tags: blog
layout: layouts/Blog.tsx
---

I created a [python package](https://pypi.org/project/django-migrate-middleware/) that runs django migrations on every request. It seems silly but has been useful for creating *almost* stateless AWS Lambda functions using django.

<!--more-->

I've found using django in AWS Lambdas pretty useful for creating little websites that need a little server work and can't be fully static. Sometimes I want a little state and the power of django's database integration between a request and a response has proven really useful. Using an ephemeral sqlite database in the `/tmp` directory is really handy for stuff like this. As such this package allows each request to have a database available.

An example of this pattern is implemented in my [set fire to emoji](https://setfire.lukewiwa.com) website. You can see [in the source](https://github.com/lukewiwa/set-fire-to-emoji/blob/main/src/config/settings.py#L71) where my package being used.
