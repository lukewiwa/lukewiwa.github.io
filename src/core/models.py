# Create your models here.
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class UuidModelMixin(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )

    class Meta:
        abstract = True


class User(AbstractUser, UuidModelMixin):
    pass
