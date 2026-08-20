from django.contrib import admin

from publishing.models import PublishRun


@admin.register(PublishRun)
class PublishRunAdmin(admin.ModelAdmin):
    list_display = ["__str__", "status", "target", "pages_built", "created"]
    list_filter = ["status"]
    readonly_fields = [
        "user",
        "status",
        "target",
        "started_at",
        "finished_at",
        "pages_built",
        "files_uploaded",
        "log",
    ]

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False
