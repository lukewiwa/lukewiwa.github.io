import logging

from django.conf import settings
from django.db import models

from core.models.mixins import CreatedModifiedMixin

logger = logging.getLogger(__name__)


class PublishRun(CreatedModifiedMixin):
    """One run of the bake-and-deploy pipeline.

    Rows are created by the CMS and updated as the run progresses so the admin
    can poll for status without any queue infrastructure.
    """

    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        RUNNING = "running", "Running"
        SUCCEEDED = "succeeded", "Succeeded"
        FAILED = "failed", "Failed"

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True
    )
    status = models.CharField(
        max_length=16, choices=Status.choices, default=Status.PENDING, db_index=True
    )
    target = models.CharField(max_length=255, blank=True)
    started_at = models.DateTimeField(null=True, blank=True)
    finished_at = models.DateTimeField(null=True, blank=True)
    pages_built = models.PositiveIntegerField(default=0)
    files_uploaded = models.PositiveIntegerField(default=0)
    log = models.TextField(blank=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f"Publish {self.pk} ({self.status})"

    @property
    def duration(self):
        if self.started_at and self.finished_at:
            return self.finished_at - self.started_at
        return None

    @property
    def is_finished(self) -> bool:
        return self.status in {self.Status.SUCCEEDED, self.Status.FAILED}

    def append_log(self, message: str) -> None:
        logger.info("[publish %s] %s", self.pk, message)
        self.log = f"{self.log}{message}\n"
