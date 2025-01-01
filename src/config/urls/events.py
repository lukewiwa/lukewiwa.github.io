from django.urls import include, path

urlpatterns = [
    path("", include("core.urls.events")),
    path("", include("core.urls.health_check")),
]
