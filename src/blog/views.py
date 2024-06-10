# Create your views here.
from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Atom1Feed
from django.views.generic import TemplateView
from jsonfeed import JSONFeed

from blog.models import BlogPage


class IndexView(TemplateView):
    template_name = "blog/index.html"


class RssFeed(Feed):
    title = "Wiwa"
    description = "The Ramblings of Wiwa"
    link = "/blog/feed/"

    def items(self):
        return BlogPage.objects.all()

    def item_link(self, item: BlogPage) -> str:
        return item.url


class AtomFeed(RssFeed):
    feed_type = Atom1Feed
    subtitle = RssFeed.description


class JsonFeed(RssFeed):
    feed_type = JSONFeed
