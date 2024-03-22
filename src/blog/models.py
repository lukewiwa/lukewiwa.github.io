# Create your models here.
from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.blocks import BlockQuoteBlock, RichTextBlock
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page


class BlogIndexPage(Page):
    content_panels = Page.content_panels


class BlogPage(Page):
    date = models.DateField("Post date")
    body = StreamField(
        [
            ("paragraph", RichTextBlock()),
            ("image", ImageChooserBlock()),
            ("quote", BlockQuoteBlock()),
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("date"),
        FieldPanel("body"),
    ]
