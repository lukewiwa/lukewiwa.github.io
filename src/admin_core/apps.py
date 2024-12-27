from django.contrib.admin.apps import AdminConfig
from django.apps import AppConfig


class AdminCoreAppConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "admin_core"


class AdminCoreConfig(AdminConfig):
    default_site = "admin_core.admin.AdminCoreSite"
