from django.contrib import admin
from .models import Event, Application # Added Application here

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'location')
    search_fields = ('title', 'description')

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'school', 'applied_at')
    search_fields = ('full_name', 'email', 'school')
    list_filter = ('applied_at', 'grade')