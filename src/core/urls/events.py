from django.urls import path

from core.views.utilities import EventsView

urlpatterns = [
    path("events/", EventsView.as_view(), name="aws-events"),
]
