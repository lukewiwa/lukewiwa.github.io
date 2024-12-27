from dataclasses import dataclass

from django import template
from django.urls import reverse

register = template.Library()


@dataclass
class Link:
    url: str
    title: str
    active: bool = False


@register.inclusion_tag("core/includes/navbar.html", takes_context=True)
def navbar(context: template.Context) -> dict:
    HOME_LINK = Link(url=reverse("core:index"), title="Wiwa")

    request = context["request"]
    REGISTERED_HEADER_LINKS = [
        Link(url=reverse("wagtail_serve", args=[""]), title="Blog"),
        Link(url=reverse("core:projects"), title="Projects"),
    ]
    if request.user.is_authenticated:
        REGISTERED_HEADER_LINKS.append(
            Link(url=reverse("admin:index"), title="Admin"),
        )

    for link in REGISTERED_HEADER_LINKS:
        link.active = request.path_info.startswith(link.url)
    home_url = reverse("core:index")

    HOME_LINK.active = request.path_info == home_url

    return {"home_link": HOME_LINK, "links": REGISTERED_HEADER_LINKS}
