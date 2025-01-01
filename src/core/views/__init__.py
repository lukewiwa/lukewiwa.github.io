import csv
import io

import requests
from bakery.views import BuildableTemplateView
from django.views.generic import RedirectView, TemplateView


class IndexView(BuildableTemplateView):
    template_name = "core/index.html"
    build_path = "index.html"


class ProjectsView(BuildableTemplateView):
    template_name = "core/projects.html"
    build_path = "projects/index.html"


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
