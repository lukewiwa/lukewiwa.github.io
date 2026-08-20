import logging

from django.http import HttpResponseNotAllowed
from django.shortcuts import get_object_or_404, render
from django.views.decorators.http import require_POST

from publishing.models import PublishRun
from publishing.runners import get_publish_runner
from publishing.targets import get_publish_target

logger = logging.getLogger(__name__)


def _status_response(request, run: PublishRun):
    return render(request, "publishing/includes/status.html", {"run": run})


def panel(request):
    """The publish screen in the Wagtail admin."""
    if request.method != "GET":
        return HttpResponseNotAllowed(["GET"])

    return render(
        request,
        "publishing/panel.html",
        {
            "run": PublishRun.objects.first(),
            "recent_runs": PublishRun.objects.all()[:10],
            "target": get_publish_target(),
        },
    )


@require_POST
def start(request):
    """Kick off a publish and hand back the status panel."""
    run = PublishRun.objects.create(user=request.user)
    logger.info("Publish %s requested by %s", run.pk, request.user)
    get_publish_runner().run(run)
    run.refresh_from_db()
    return _status_response(request, run)


def status(request, pk: int):
    """Current state of a run, polled by htmx while one is in flight."""
    return _status_response(request, get_object_or_404(PublishRun, pk=pk))
