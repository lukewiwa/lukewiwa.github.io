from django.conf import settings

INDEX = "index.html"


def canonical_path(path: str) -> str:
    """Normalise a request path into the URL a visitor will actually see.

    Directory indexes are served at the directory, and every path is absolute.
    """
    path = path.removesuffix(INDEX)
    if not path.startswith("/"):
        path = f"/{path}"
    return path


def site(request):
    """Absolute URLs that survive being baked.

    During a bake there is no real request, so `build_absolute_uri` would emit
    `http://testserver/...` into the published HTML. Templates use these
    instead.

    `canonical_url` here is only a fallback for views rendered through a real
    request. Buildable views set it explicitly from their URL conf, because
    django-bakery renders them through a RequestFactory that mangles nested
    build paths ("projects/index.html" arrives as "/projectsindex.html").
    """
    return {
        "site_base_url": settings.SITE_BASE_URL,
        "canonical_url": f"{settings.SITE_BASE_URL}{canonical_path(request.path)}",
    }
