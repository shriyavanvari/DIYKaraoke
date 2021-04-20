from django.contrib import admin
from .models import Songs

# Register your models here.
@admin.register(Songs)
class SongsModel(admin.ModelAdmin):
    list_filter = ('title', 'artist')
    list_display = ('title', 'artist')