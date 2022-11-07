---
title: Setup Mangum in AWS Lambda for Django
date: 2022-11-07
tags: blog
layout: layouts/Blog.tsx
---

Here's a quick setup guide to get [mangum](https://mangum.io/) working as the request handler in a django project in AWS Lambda.

<!--more-->


The first step is to setup the handler function itself. The tutorial in the official docs outlines this process but I like to add a little extra processing to the handler for running select management commands. This could be abstracted out further than here but I find the migrate command enough for my needs. Add the following to `asgi.py`.

```python
from django.core.asgi import get_asgi_application
from django.core.management import call_command
from mangum import Mangum
from mangum.types import LambdaContext, LambdaEvent

application = get_asgi_application()


def handler(event: LambdaEvent, context: LambdaContext):
    if event.get("migrate", None):
        call_command("migrate", interactive=False)
    else:
        return Mangum(application, lifespan="off")(event, context)
```

The next step is to setup logging. It seems under default configs this goes missing when deployed so the below config tweaks the default django config just slightly so that mangum largely mirrors the output you would get running this on a standard asgi or wsgi framework. Add the following to your settings file (usually `settings.py`).

```python
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "django.server": {
            "()": "django.utils.log.ServerFormatter",
            "format": "[{server_time}] {message}",
            "style": "{",
        }
    },
    "handlers": {
        "django.server": {
            "level": "INFO",
            "class": "logging.StreamHandler",
            "formatter": "django.server",
        },
    },
    "loggers": {
        "mangum": {
            "handlers": ["django.server"],
            "level": "INFO",
            "propagate": False,
        },
    },
}
```
