from core.views import IndexView, ProjectsView
from django.urls import path

app_name = "core"

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("projects/", ProjectsView.as_view(), name="projects"),
]
