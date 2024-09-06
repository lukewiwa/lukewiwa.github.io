from django.urls import include, path
from wagtail import urls as wagtail_urls
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls

from blog.views import AtomFeed, JsonFeed, RssFeed

urlpatterns = [
    path("cms/", include(wagtailadmin_urls)),
    path("documents/", include(wagtaildocs_urls)),
    path("feed/rss.xml", RssFeed(), name="blog_rss_feed"),
    path("feed/atom.xml", AtomFeed(), name="blog_atom_feed"),
    path("feed/feed.json", JsonFeed(),name="blog_json_feed"),
    path("", include(wagtail_urls)),
]
