# Create your models here.
from django.contrib.auth.models import AbstractUser

from core.models.mixins import CreatedModifiedMixin, UuidModelMixin


class User(AbstractUser, UuidModelMixin, CreatedModifiedMixin):
    class Meta(AbstractUser.Meta, UuidModelMixin.Meta, CreatedModifiedMixin.Meta):
        pass
