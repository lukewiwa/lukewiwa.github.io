# Create your models here.
from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.blocks import BlockQuoteBlock, RichTextBlock
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page
from wagtailcodeblock.blocks import CodeBlock

from blog.blocks import FoldBlock


class BlogIndexPage(Page):
    content_panels = Page.content_panels

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        context["posts"] = BlogPage.objects.child_of(self).live().order_by("-date")
        return context


class BlogPage(Page):
    date = models.DateField("Post date")
    description = models.TextField(blank=True)
    body = StreamField(
        [
            ("rich_text", RichTextBlock()),
            ("image", ImageChooserBlock()),
            ("quote", BlockQuoteBlock()),
            ("code", CodeBlock()),
            ("fold", FoldBlock()),
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("date"),
        FieldPanel("description"),
        FieldPanel("body"),
    ]

    def before_the_fold(self):
        if self.description:
            yield self.description
        else:
            for block in self.body:
                if isinstance(block.block, FoldBlock):
                    return
                yield block
