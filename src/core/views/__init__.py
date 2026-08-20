import csv
import io
from urllib.parse import urljoin

import requests
from bakery.views import BuildableTemplateView
from django.conf import settings
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import RedirectView, TemplateView


class CanonicalUrlMixin:
    """Give a baked page an absolute URL that does not depend on the request.

    django-bakery renders these views through a synthetic request whose path is
    derived from `build_path`, and Django's RequestFactory mangles the relative
    form of it, so the canonical URL is taken from the URL conf instead.
    """

    canonical_url_name: str

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["canonical_url"] = urljoin(
            settings.SITE_BASE_URL, reverse(self.canonical_url_name)
        )
        return context


class IndexView(CanonicalUrlMixin, BuildableTemplateView):
    template_name = "core/index.html"
    build_path = "index.html"
    canonical_url_name = "core:index"


class ProjectsView(CanonicalUrlMixin, BuildableTemplateView):
    template_name = "core/projects.html"
    build_path = "projects/index.html"
    canonical_url_name = "core:projects"


class Buildable404View(BuildableTemplateView):
    """Baked so CloudFront can serve it as the 404 error response."""

    template_name = "404.html"
    build_path = "404.html"


class CodeOfPointsRedirectView(RedirectView):
    permanent = True
    pattern_name = "core:code-of-points"


class CodeOfPointsView(TemplateView):
    template_name = "core/code_of_points.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        r = requests.get(
            "https://raw.githubusercontent.com/lukewiwa/code_of_points_MAG_2020/master/code_of_points_MAG_2020.csv"
        )
        csv_string = io.StringIO(r.content.decode("utf-8"))
        reader = csv.reader(csv_string)

        def delete_first_column_in_line(line):
            return line[1:]

        context["headers"] = delete_first_column_in_line(next(reader))
        context["data"] = (delete_first_column_in_line(line) for line in reader)
        return context


def custom_404_view(request, exception):
    return render(request, "404.html", status=404)


def custom_500_view(request):
    return render(request, "500.html", status=500)
