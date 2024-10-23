from django.contrib import admin
from .models import (
   Platform,
   Account, AccountMetric,
   User,
)

class UserAdmin(admin.ModelAdmin):
  list_display = ('first_name', 'last_name', 'email')
  search_fields = ('first_name', 'last_name', 'email')


class AccountAdmin(admin.ModelAdmin):
  list_display = ('name', 'platform', 'type', 'status', 'last_connected')
  search_fields = ('name', 'platform',)
  list_filter = ('status', 'type')


class AccountMetricAdmin(admin.ModelAdmin):
    list_display = ('title', 'account', 'count', 'percent')
    search_fields = ('account__name', 'title')
    list_filter = ('title',)


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Platform)
admin.site.register(Account, AccountAdmin)
admin.site.register(AccountMetric, AccountMetricAdmin)

