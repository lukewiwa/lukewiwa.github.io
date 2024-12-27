from typing import Any

from django.contrib import admin
from django.http import HttpRequest

from admin_utils.models import ManagementCommandRun


# Register your models here.
@admin.register(ManagementCommandRun)
class ManageAdmin(admin.ModelAdmin):
    readonly_fields = ["user", "stdout", "stderr", "exception"]

    def has_change_permission(
        self, request: HttpRequest, obj: Any | None = ...
    ) -> bool:
        return False

    def save_model(self, request: Any, obj: Any, form: Any, change: Any) -> None:
        obj.user = request.user
        return super().save_model(request, obj, form, change)
