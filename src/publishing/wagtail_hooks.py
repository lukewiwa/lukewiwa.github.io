from django.urls import include, path, reverse_lazy
from wagtail import hooks
from wagtail.admin.menu import MenuItem

from publishing import views

publishing_patterns = [
    path("", views.panel, name="publishing_panel"),
    path("start/", views.start, name="publishing_start"),
    path("status/<int:pk>/", views.status, name="publishing_status"),
]


@hooks.register("register_admin_urls")
def register_publishing_urls():
    # Not namespaced: these names are unique enough on their own, and it keeps
    # the templates readable.
    return [path("publish/", include(publishing_patterns))]


@hooks.register("register_admin_menu_item")
def register_publishing_menu_item():
    return MenuItem(
        "Publish site",
        # Lazy because hooks are registered while the URL conf is still loading.
        reverse_lazy("publishing_panel"),
        icon_name="upload",
        order=900,
    )
