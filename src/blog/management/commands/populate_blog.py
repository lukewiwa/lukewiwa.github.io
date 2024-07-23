import json
import logging
from typing import Any

import frontmatter
import marko
from django.conf import settings
from django.core.management import BaseCommand
from django.db import transaction
from wagtail.models import Page, Site

from blog.models import BlogIndexPage, BlogPage

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    @transaction.atomic
    def handle(self, *args: Any, **options: Any):
        site = Site.objects.first()
        if not site:
            site = Site.objects.create(hostname="localhost", is_default_site=True)

        example_page = Page.objects.filter(title="Welcome to your new Wagtail site!")
        example_page.all().delete()

        BlogIndexPage.objects.all().delete()

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
                    case (
                        marko.block.Paragraph()
                        | marko.block.Heading()
                        | marko.block.List()
                    ):
                        paragraph = marko.render(child)
                        blocks.append({"type": "rich_text", "value": paragraph})
                    case marko.block.Quote():
                        blocks.append(
                            {
                                "type": "quote",
                                "value": child.children[0].children[0].children,
                            }
                        )
                    case marko.block.FencedCode():
                        code_string = child.children[0].children
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

            blog_page = BlogPage(
                title=title,
                date=post.metadata["date"],
                body=body,
                slug=file.stem,
                description=post.metadata.get("description", ""),
            )
            blog_index_page.add_child(instance=blog_page)
            blog_page.save_revision().publish()
            self.stdout.write("Created: %s" % title)
