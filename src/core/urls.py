from django.urls import path

from core.views import (
    CodeOfPointsRedirectView,
    CodeOfPointsView,
    HealthCheck,
    IndexView,
    ProjectsView,
)

app_name = "core"

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("projects/", ProjectsView.as_view(), name="projects"),
    path(
        "code-of-points/",
        CodeOfPointsRedirectView.as_view(),
        name="code-of-points-redirect",
    ),
    path("code_of_points/", CodeOfPointsView.as_view(), name="code-of-points"),
    path("health_check/", HealthCheck.as_view(), name="health-check"),
]
