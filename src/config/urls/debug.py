from django.urls import include, path

urlpatterns = [
    path("", include("config.urls.prod")),
    path("", include("config.urls.events")),
    path("__debug__/", include("debug_toolbar.urls")),
]
