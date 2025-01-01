import argparse
import datetime
import json
import logging
from pathlib import Path
from typing import Any

import frontmatter
import marko
import marko.inline
from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.files import File
from django.core.management import BaseCommand
from django.core.management.base import CommandParser
from django.db import transaction
from django.utils import timezone
from wagtail.images import get_image_model
from wagtail.models import Page, Site

from blog.models import BlogIndexPage, BlogPage

logger = logging.getLogger(__name__)

Image = get_image_model()

User = get_user_model()

lukewiwa = User.objects.get(username="lukewiwa")


class Command(BaseCommand):
    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument("--clear", action=argparse.BooleanOptionalAction)

    @transaction.atomic
    def handle(self, *args: Any, **options: Any):
        logger.info("Setting up site")
        site = Site.objects.first()
        if not site:
            site = Site.objects.create(hostname=settings.DOMAIN, is_default_site=True)

        example_page = Page.objects.filter(title="Welcome to your new Wagtail site!")
        example_page.all().delete()

        if options.get("clear"):
            logger.info("Clearing old pages")
            BlogPage.objects.all().delete()
            BlogIndexPage.objects.all().delete()

        logger.info("Setting up the index page")
        root_page = Page.objects.get(title="Root")
        blog_index_pages = BlogIndexPage.objects.filter(title="Wiwa's Blog")
        if not blog_index_pages.exists():
            blog_index_page = BlogIndexPage(title="Wiwa's Blog")
            root_page.add_child(instance=blog_index_page)
            site.root_page = blog_index_page
            site.save()

        # Populate blog
        blog_dir = settings.ROOT_DIR / "blog"
        markdown_files = (f for f in blog_dir.iterdir() if f.suffix == ".md")
        for file in markdown_files:
            logger.info("Processing %s", file)
            with open(file, "r") as f:
                post = frontmatter.load(f)
            title = post.metadata["title"]
            doc = marko.parse(post.content)
            blocks: list[dict] = []

            existing_page = BlogPage.objects.filter(slug=file.stem)
            if existing_page.exists():
                continue

            for child in doc.children:
                match child:
                    case marko.block.Paragraph(
                        children=[marko.inline.Image() as image]
                    ):
                        root, *parts = Path(image.dest).parts
                        file_path = Path(settings.ROOT_DIR, "_static", *parts)
                        with file_path.open(mode="rb") as f:
                            image_file = File(f, name=file_path.name)
                            im = Image(file=image_file, title=file_path.name)
                            im.save()
                        blocks.append({"type": "image", "value": im.pk})
                    case (
                        marko.block.Heading()
                        | marko.block.List()
                        | marko.block.Paragraph()
                    ):
                        paragraph = marko.render(child)
                        blocks.append({"type": "rich_text", "value": paragraph})

                    case marko.block.Quote(
                        children=[
                            marko.block.Paragraph(
                                children=[marko.inline.RawText(children=quote_string)]
                            )
                        ]
                    ):
                        blocks.append(
                            {
                                "type": "quote",
                                "value": quote_string,
                            }
                        )
                        self.stdout.write(quote_string)
                    case marko.block.FencedCode(
                        children=[marko.inline.RawText(children=code_string)]
                    ):
                        blocks.append(
                            {
                                "type": "code",
                                "value": {
                                    "language": child.lang,
                                    "code": code_string,
                                },
                            }
                        )
                    case marko.block.HTMLBlock():
                        if "<!--more-->" in child.body:
                            blocks.append(
                                {
                                    "type": "fold",
                                    "value": None,
                                }
                            )

                    case _:
                        pass

            body = json.dumps(blocks)
            date = post.metadata["date"]

            blog_datetime = timezone.make_aware(
                timezone.datetime.combine(date, datetime.datetime.min.time())
            )

            blog_page = BlogPage(
                owner=lukewiwa,
                title=title,
                date=date,
                body=body,
                slug=file.stem,
                description=post.metadata.get("description", ""),
                first_published_at=blog_datetime,
                latest_revision_created_at=blog_datetime,
            )
            blog_index_page.add_child(instance=blog_page)
            revision = blog_page.save_revision()
            revision.publish(user=lukewiwa)

            blog_page.revisions.update(created_at=blog_datetime)
            blog_page.first_published_at = blog_datetime
            blog_page.latest_revision_created_at = blog_datetime
            blog_page.save()

            self.stdout.write("Created: %s" % title)
