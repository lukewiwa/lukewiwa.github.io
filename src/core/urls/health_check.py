from django.urls import path

from core.views.utilities import HealthCheck

urlpatterns = [
    path("health_check/", HealthCheck.as_view(), name="health-check"),
]
