import logging
from typing import Any
from wagtail.models import Page

from django.conf import settings
from django.core.management import BaseCommand
from django.db import transaction
import frontmatter

from blog.models import BlogIndexPage, BlogPage

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    @transaction.atomic
    def handle(self, *args: Any, **options: Any):
        # site = Site.objects.first()
        # if not site:
        #     raise CommandError("Couldn't find a site")

        # welcome_page = Page.objects.get(title="Welcome to your new Wagtail site!")
        # welcome_page.delete()

        root_page = Page.objects.get(title="Root")

        blog_index_page, created = BlogIndexPage.objects.get_or_create(
            title="Wiwa's Blog"
        )
        if created:
            root_page.add_child(instance=blog_index_page)
            root_page.save()
        # print("Created blog index")
        # site.root_page = blog_index_page
        # site.save()

        # Populate blog
        blog_dir = settings.ROOT_DIR / "blog"
        markdown_files = (f for f in blog_dir.iterdir() if f.suffix == ".md")
        for file in markdown_files:
            with open(file, "r") as f:
                post = frontmatter.load(f)
            print(post.metadata)
