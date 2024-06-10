from django import template

register = template.Library()


@register.tag(name="projectsection")
def do_project_section(parser, token):
    nodelist = parser.parse(("endprojectsection",))
    parser.delete_first_token()
    return ProjectSectionNode(nodelist)


class ProjectSectionNode(template.Node):
    def __init__(self, nodelist):
        self.nodelist = nodelist

    def render(self, context):
        return self.nodelist.render(context)
