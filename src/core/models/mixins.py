import uuid

from django.db import models


class UuidModelMixin(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )

    class Meta:
        abstract = True


class CreatedModifiedMixin(models.Model):
    created = models.DateTimeField(
        verbose_name="Date created",
        auto_now_add=True,
        help_text="The date and time at which the object was entered into the system",
    )
    modified = models.DateTimeField(
        verbose_name="Date last modified",
        auto_now=True,
        help_text="The date and time at which the object was last modified",
    )

    class Meta:
        abstract = True
