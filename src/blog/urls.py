from django.urls import include, path
from wagtail import urls as wagtail_urls
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls

from blog.views import AtomFeed, JsonFeed, RssFeed

urlpatterns = [
    path("cms/", include(wagtailadmin_urls)),
    path("documents/", include(wagtaildocs_urls)),
    path("feed/rss.xml", RssFeed()),
    path("feed/atom.xml", AtomFeed()),
    path("feed/feed.json", JsonFeed()),
    path("", include(wagtail_urls)),
]
