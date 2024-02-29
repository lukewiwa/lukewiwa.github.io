"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import logging
import os

from django.core.asgi import get_asgi_application
from django.core.management import call_command
from mangum import Mangum
from mangum.types import LambdaContext, LambdaEvent
from asgiref.compatibility import guarantee_single_callable

logger = logging.getLogger(__name__)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
application = get_asgi_application()

wrapped_application = guarantee_single_callable(application)


def handler(event: LambdaEvent, context: LambdaContext):
    logger.debug(event)
    if event.get("migrate", None):
        call_command("migrate", interactive=False)
    else:
        return Mangum(wrapped_application, lifespan="off")(event, context)
