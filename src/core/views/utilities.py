import json
import logging

from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt

from admin_utils.models import ManagementCommandRun

logger = logging.getLogger(__name__)


@method_decorator(never_cache, name="dispatch")
class HealthCheck(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({"status": "OK"})


@method_decorator(csrf_exempt, name="dispatch")
class EventsView(View):
    """Events handler"""

    def post(self, request, *args, **kwargs):
        request_body = request.body.decode("utf-8")
        logger.info("Got events request %s", request_body)
        body = json.loads(request_body)
        response = body
        if command := body.get("manage"):
            command_run = ManagementCommandRun.objects.create(command=command)
            response = {
                "stdout": command_run.stdout,
                "stderr": command_run.stderr,
                "exception": command_run.exception,
            }
        return JsonResponse({"message": response})
