"""How a publish gets executed once the CMS has asked for one.

A bake of this site is a few seconds of work, so the default is simply to run
it inline and hand htmx back the finished result. The abstraction exists
because the *safe* ways to run it out-of-process are constrained: Litestream
only tolerates one process replicating a given database, so any runner that
executes elsewhere must treat the database as read-only.
"""

import logging
import threading

from django.conf import settings
from django.core.management import call_command
from django.utils.module_loading import import_string

from publishing.models import PublishRun

logger = logging.getLogger(__name__)


class InlineRunner:
    """Run the publish in the current process, blocking until it finishes.

    The default. On Lambda this is also the only option that keeps a single
    Litestream writer, because the execution environment is frozen the moment
    the response is returned and background work would never finish.
    """

    def run(self, run: PublishRun) -> None:
        try:
            call_command("publish", run_id=run.pk)
        except Exception:
            # The command has already recorded the failure on the run.
            logger.exception("Inline publish %s failed", run.pk)


class ThreadRunner:
    """Run the publish in a background thread.

    Convenient under `runserver`, where it keeps the dev server responsive and
    lets the htmx status panel poll. Never use this on Lambda.
    """

    def run(self, run: PublishRun) -> None:
        def target():
            try:
                call_command("publish", run_id=run.pk)
            except Exception:
                logger.exception("Threaded publish %s failed", run.pk)

        threading.Thread(target=target, daemon=True, name=f"publish-{run.pk}").start()


RUNNERS = {
    "inline": "publishing.runners.InlineRunner",
    "thread": "publishing.runners.ThreadRunner",
}


def get_publish_runner():
    configured = settings.PUBLISH_RUNNER
    runner_class = import_string(RUNNERS.get(configured, configured))
    return runner_class()
