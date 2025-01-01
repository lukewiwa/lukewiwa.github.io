"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import RedirectView

urlpatterns = [
    path("", include("core.urls.prod")),
    path("", include("core.urls.health_check")),
    path("blog/", include("blog.urls")),
    # path("accounts/", include("django.contrib.auth.urls")),
    path("admin/", admin.site.urls),
    path(
        "feed/blog/",
        include(
            [
                path(
                    "rss.xml",
                    RedirectView.as_view(permanent=True, pattern_name="blog_rss_feed"),
                    name="redirect_to_rss_feed",
                ),
                path(
                    "atom.xml",
                    RedirectView.as_view(permanent=True, pattern_name="blog_atom_feed"),
                    name="redirect_to_atom_feed",
                ),
                path(
                    "feed.json",
                    RedirectView.as_view(permanent=True, pattern_name="blog_json_feed"),
                    name="redirect_to_json_feed",
                ),
            ]
        ),
    ),
]
