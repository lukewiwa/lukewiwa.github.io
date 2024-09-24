import io
import logging

from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.db import models

from core.models.mixins import CreatedModifiedMixin

logger = logging.getLogger(__name__)

User = get_user_model()


class ManagementCommandRun(CreatedModifiedMixin):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    command = models.CharField(max_length=255)
    stdout = models.TextField(blank=True)
    stderr = models.TextField(blank=True)
    exception = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        if self._state.adding is False:
            logger.warning("management command models cannot be edited")
            return
        stdout = io.StringIO()
        stderr = io.StringIO()
        try:
            call_command(
                *self.command.split(" "),
                no_color=True,
                stdout=stdout,
                stderr=stderr,
            )
            self.stdout = stdout.getvalue()
            self.stderr = stderr.getvalue()
        except Exception as e:
            self.exception = e
        return super().save(*args, **kwargs)

    def __str__(self):
        return f"[{self.user or 'system'}] ./manage.py {self.command} ({self.pk})"
