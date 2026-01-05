# Create your views here.
from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Atom1Feed
from django.views.generic import TemplateView
from jsonfeed import JSONFeed
from wagtail.rich_text import RichText

from blog.models import BlogPage


class IndexView(TemplateView):
    template_name = "blog/index.html"


class RssFeed(Feed):
    title = "Wiwa"
    description = "The Ramblings of Wiwa"
    link = "/blog/"

    def items(self):
        return BlogPage.objects.live().order_by("-date")

    def item_title(self, item: BlogPage) -> str:
        return item.title

    def item_link(self, item: BlogPage) -> str:
        return item.url

    def item_pubdate(self, item: BlogPage):
        return item.first_published_at

    def item_updateddate(self, item: BlogPage):
        return item.latest_revision_created_at

    def item_description(self, item: BlogPage) -> str:
        """Return the content before the fold, or description if set."""
        if item.description:
            return item.description

        # Render content before the fold
        content_parts = []
        for block in item.before_the_fold():
            if isinstance(block, str):
                content_parts.append(block)
            elif hasattr(block, "render"):
                content_parts.append(str(block.render()))
            elif isinstance(block.value, RichText):
                content_parts.append(str(block.value))
            else:
                content_parts.append(str(block.value))
        return "".join(content_parts)


class AtomFeed(RssFeed):
    feed_type = Atom1Feed
    subtitle = RssFeed.description


class JsonFeed(RssFeed):
    feed_type = JSONFeed
