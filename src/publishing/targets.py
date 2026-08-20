"""Where a baked site gets deployed to.

The same pipeline runs locally and in production; only the target differs, and
the target is chosen by configuration rather than by a `DEBUG` check. Locally
that is either a plain directory or a MinIO bucket; in production it is the S3
bucket behind CloudFront. Because MinIO speaks the S3 API, the production code
path is the one exercised in local development.
"""

import hashlib
import logging
import mimetypes
import shutil
from abc import ABC, abstractmethod
from pathlib import Path

from django.conf import settings
from django.utils.module_loading import import_string

logger = logging.getLogger(__name__)

# Baked HTML is cheap to regenerate and must never go stale, so it is always
# revalidated. Fingerprinted static assets can be cached indefinitely.
HTML_CACHE_CONTROL = "public, max-age=0, must-revalidate"
ASSET_CACHE_CONTROL = "public, max-age=31536000, immutable"


def _cache_control(key: str) -> str:
    return (
        HTML_CACHE_CONTROL
        if key.endswith((".html", ".xml", ".json"))
        else ASSET_CACHE_CONTROL
    )


def _content_type(path: Path) -> str:
    content_type, _ = mimetypes.guess_type(path.name)
    return content_type or "application/octet-stream"


def _walk(directory: Path):
    """Yield (absolute path, key) for every file under `directory`."""
    for path in sorted(directory.rglob("*")):
        if path.is_file():
            yield path, path.relative_to(directory).as_posix()


class PublishTarget(ABC):
    """Somewhere a baked site can be deployed to."""

    name = "target"

    @abstractmethod
    def deploy(self, build_dir: Path, run) -> int:
        """Push everything under `build_dir`. Returns the number of files written."""

    def invalidate(self, run) -> None:
        """Purge any cache sitting in front of the target. Optional."""


class FilesystemPublishTarget(PublishTarget):
    """Copy the baked site into a local directory.

    Lets `just publish` work with no object storage running at all.
    """

    name = "filesystem"

    def __init__(self):
        self.destination = Path(settings.PUBLISH_DESTINATION)

    def __str__(self):
        return f"filesystem://{self.destination}"

    def deploy(self, build_dir: Path, run) -> int:
        if self.destination.exists():
            shutil.rmtree(self.destination)
        shutil.copytree(build_dir, self.destination)
        count = sum(1 for _ in _walk(self.destination))
        run.append_log(f"Copied {count} files to {self.destination}")
        return count


class S3PublishTarget(PublishTarget):
    """Sync the baked site into an S3 (or MinIO) bucket.

    Only files whose contents actually changed are uploaded, which keeps a
    republish of a 40 post blog down to the handful of pages that moved.
    """

    name = "s3"

    def __init__(self):
        import boto3

        self.bucket_name = settings.PUBLISH_BUCKET_NAME
        if not self.bucket_name:
            raise RuntimeError(
                "PUBLISH_BUCKET_NAME must be set to publish to S3. "
                "Set PUBLISH_TARGET=filesystem to publish to a local directory instead."
            )
        self.client = boto3.client(
            "s3",
            endpoint_url=settings.PUBLISH_ENDPOINT_URL or None,
            aws_access_key_id=settings.PUBLISH_ACCESS_KEY_ID or None,
            aws_secret_access_key=settings.PUBLISH_SECRET_ACCESS_KEY or None,
            region_name=settings.AWS_REGION or None,
        )
        self.distribution_id = settings.CLOUDFRONT_DISTRIBUTION_ID

    def __str__(self):
        endpoint = settings.PUBLISH_ENDPOINT_URL or "aws"
        return f"s3://{self.bucket_name} ({endpoint})"

    def _remote_etags(self) -> dict[str, str]:
        etags: dict[str, str] = {}
        paginator = self.client.get_paginator("list_objects_v2")
        for page in paginator.paginate(Bucket=self.bucket_name):
            for obj in page.get("Contents", []):
                etags[obj["Key"]] = obj["ETag"].strip('"')
        return etags

    def deploy(self, build_dir: Path, run) -> int:
        remote = self._remote_etags()
        local_keys: set[str] = set()
        uploaded = 0

        for path, key in _walk(build_dir):
            local_keys.add(key)
            body = path.read_bytes()
            # S3 sets a plain MD5 as the ETag for single-part uploads, which is
            # what every file here will be.
            digest = hashlib.md5(body).hexdigest()
            if remote.get(key) == digest:
                continue
            self.client.put_object(
                Bucket=self.bucket_name,
                Key=key,
                Body=body,
                ContentType=_content_type(path),
                CacheControl=_cache_control(key),
            )
            uploaded += 1

        stale = set(remote) - local_keys
        if stale:
            # delete_objects caps out at 1000 keys per call.
            keys = sorted(stale)
            for batch_start in range(0, len(keys), 1000):
                batch = keys[batch_start : batch_start + 1000]
                self.client.delete_objects(
                    Bucket=self.bucket_name,
                    Delete={"Objects": [{"Key": key} for key in batch]},
                )
            run.append_log(f"Removed {len(stale)} file(s) no longer in the build")

        run.append_log(
            f"Uploaded {uploaded} changed file(s) of {len(local_keys)} to {self.bucket_name}"
        )
        return uploaded

    def invalidate(self, run) -> None:
        if not self.distribution_id:
            run.append_log(
                "No CloudFront distribution configured, skipping invalidation"
            )
            return

        import boto3

        cloudfront = boto3.client("cloudfront", region_name=settings.AWS_REGION or None)
        response = cloudfront.create_invalidation(
            DistributionId=self.distribution_id,
            InvalidationBatch={
                "Paths": {"Quantity": 1, "Items": ["/*"]},
                "CallerReference": f"publish-{run.pk}-{run.created.timestamp()}",
            },
        )
        invalidation_id = response["Invalidation"]["Id"]
        run.append_log(f"Created CloudFront invalidation {invalidation_id}")


TARGETS = {
    "filesystem": "publishing.targets.FilesystemPublishTarget",
    "s3": "publishing.targets.S3PublishTarget",
}


def get_publish_target() -> PublishTarget:
    """Build the configured target. `PUBLISH_TARGET` is a name or a dotted path."""
    configured = settings.PUBLISH_TARGET
    target_class = import_string(TARGETS.get(configured, configured))
    return target_class()
