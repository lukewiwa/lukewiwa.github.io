from django import template

register = template.Library()


@register.inclusion_tag("core/includes/feather_icon.html")
def feather(name, size=24, className=""):
    return {"name": name, "size": size, "class": className}
