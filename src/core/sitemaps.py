from django.contrib.sitemaps import Sitemap
from django.urls import reverse

from blog.models import BlogIndexPage, BlogPage


class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = "monthly"

    def items(self):
        return ["core:index", "core:projects", "core:code-of-points"]

    def location(self, item):
        return reverse(item)


class BlogSitemap(Sitemap):
    priority = 0.6
    changefreq = "weekly"

    def items(self):
        return BlogPage.objects.live().only(
            "url_path", "slug", "latest_revision_created_at"
        ).order_by("-date")

    def lastmod(self, obj):
        return obj.latest_revision_created_at

    def location(self, obj):
        return obj.url


class BlogIndexSitemap(Sitemap):
    priority = 0.8
    changefreq = "daily"

    def items(self):
        return BlogIndexPage.objects.live()

    def lastmod(self, obj):
        return obj.latest_revision_created_at

    def location(self, obj):
        return obj.url
