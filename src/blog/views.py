# Create your views here.
import os
from urllib.parse import urlsplit

from bakery.views import BuildableMixin
from django.conf import settings
from django.contrib.syndication.views import Feed
from django.test.client import RequestFactory
from django.utils.feedgenerator import Atom1Feed
from django.views.generic import TemplateView
from jsonfeed import JSONFeed

from blog.models import BlogPage


class IndexView(TemplateView):
    template_name = "blog/index.html"


class BuildableFeedMixin(BuildableMixin):
    """Bake a syndication feed to a flat file.

    django-bakery has no feed view of its own, and a feed is not a template
    view, so this wires Django's syndication framework into the same build
    protocol: render the response, write the bytes.

    The synthetic request carries the canonical host and https, because the
    syndication framework turns relative item links into absolute ones using
    the request rather than any setting.
    """

    build_path: str

    @property
    def build_method(self):
        return self.build

    def create_request(self, path):
        host = urlsplit(settings.SITE_BASE_URL).hostname
        return RequestFactory(SERVER_NAME=host).get(path, secure=True)

    def build(self):
        self.request = self.create_request(f"/{self.build_path}")
        self.prep_directory(self.build_path)
        target = os.path.join(settings.BUILD_DIR, self.build_path)
        self.build_file(target, self(self.request).content)


class RssFeed(Feed):
    title = "Wiwa"
    description = "The Ramblings of Wiwa"
    link = "/blog/feed/"

    def items(self):
        return BlogPage.objects.live().order_by("-date")

    def item_link(self, item: BlogPage) -> str:
        return item.url


class AtomFeed(RssFeed):
    feed_type = Atom1Feed
    subtitle = RssFeed.description


class JsonFeed(RssFeed):
    feed_type = JSONFeed


class BuildableRssFeed(BuildableFeedMixin, RssFeed):
    build_path = "blog/feed/rss.xml"


class BuildableAtomFeed(BuildableFeedMixin, AtomFeed):
    build_path = "blog/feed/atom.xml"


class BuildableJsonFeed(BuildableFeedMixin, JsonFeed):
    build_path = "blog/feed/feed.json"
