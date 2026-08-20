"""Bake the site to static files and deploy them.

Runs identically from the command line (`just publish`), from the CMS publish
button, and from the worker Lambda. The only thing that varies between
environments is the configured `PUBLISH_TARGET`.
"""

import logging
import traceback
from contextlib import contextmanager
from pathlib import Path
from typing import Any
from urllib.parse import urlsplit

from django.conf import settings
from django.core.management import call_command
from django.core.management.base import BaseCommand, CommandParser
from django.utils import timezone

from publishing import litestream
from publishing.models import PublishRun
from publishing.targets import get_publish_target

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = "Build the static site and deploy it to the configured target"

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument(
            "--run-id",
            type=int,
            help="Update an existing PublishRun instead of creating one",
        )
        parser.add_argument(
            "--skip-invalidation",
            action="store_true",
            help="Deploy without purging the CDN cache",
        )
        parser.add_argument(
            "--skip-build",
            action="store_true",
            help="Deploy whatever is already in BUILD_DIR",
        )

    def handle(self, *args: Any, **options: Any) -> None:
        run = self._get_run(options.get("run_id"))
        target = get_publish_target()

        run.status = PublishRun.Status.RUNNING
        run.target = str(target)
        run.started_at = timezone.now()
        run.append_log(f"Publishing to {target}")
        run.save()

        try:
            self._ensure_site(run)
            build_dir = Path(settings.BUILD_DIR)
            if not options["skip_build"]:
                self._build(run, build_dir)
            else:
                run.append_log("Skipping build, deploying existing BUILD_DIR")

            run.pages_built = sum(1 for path in build_dir.rglob("*.html"))
            run.files_uploaded = target.deploy(build_dir, run)

            if not options["skip_invalidation"]:
                target.invalidate(run)

            run.status = PublishRun.Status.SUCCEEDED
            run.append_log("Publish succeeded")
        except Exception as exc:
            run.status = PublishRun.Status.FAILED
            run.append_log(f"Publish failed: {exc}")
            run.append_log(traceback.format_exc())
            logger.exception("Publish run %s failed", run.pk)
            raise
        finally:
            run.finished_at = timezone.now()
            run.save()
            # The run record itself is worth persisting even when the publish
            # blew up, so flush before Lambda freezes us.
            litestream.sync()

        self.stdout.write(
            self.style.SUCCESS(
                f"Published {run.pages_built} pages "
                f"({run.files_uploaded} changed) to {target}"
            )
        )

    def _get_run(self, run_id: int | None) -> PublishRun:
        if run_id:
            return PublishRun.objects.get(pk=run_id)
        return PublishRun.objects.create()

    def _ensure_site(self, run: PublishRun) -> None:
        """Point the Wagtail Site record at the canonical domain.

        Wagtail builds `page.full_url` from this record, so if it still says
        `localhost` every absolute URL in the baked HTML — og:url, the feeds —
        points at the wrong host.
        """
        from wagtail.models import Site

        parts = urlsplit(settings.SITE_BASE_URL)
        hostname = parts.hostname
        port = parts.port or (443 if parts.scheme == "https" else 80)

        site = Site.objects.filter(is_default_site=True).first()
        if site is None:
            run.append_log("No default Wagtail site configured, skipping site check")
            return

        if site.hostname != hostname or site.port != port:
            run.append_log(
                f"Updating site from {site.hostname}:{site.port} to {hostname}:{port}"
            )
            site.hostname = hostname
            site.port = port
            site.save()

    def _build(self, run: PublishRun, build_dir: Path) -> None:
        run.append_log(f"Baking site into {build_dir}")
        run.save()
        # django-bakery renders through a synthetic request whose host is
        # BAKERY_HOST, which ALLOWED_HOSTS has to accept for the duration of
        # the build.
        with self._allow_bakery_host():
            # build clears BUILD_DIR, renders every view in BAKERY_VIEWS, and
            # copies static and media in alongside them.
            call_command("build", verbosity=0)
        run.append_log("Bake complete")

    @contextmanager
    def _allow_bakery_host(self):
        """Allow the hosts a bake renders through.

        Plain template views are rendered against BAKERY_HOST, while Wagtail
        builds its synthetic requests from the Site record, so the canonical
        hostname has to be accepted too.
        """
        original = settings.ALLOWED_HOSTS
        canonical_host = urlsplit(settings.SITE_BASE_URL).hostname
        settings.ALLOWED_HOSTS = [*original, settings.BAKERY_HOST, canonical_host]
        try:
            yield
        finally:
            settings.ALLOWED_HOSTS = original
