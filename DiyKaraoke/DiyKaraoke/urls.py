from django.contrib import admin
from django.urls import include
from django.conf.urls import url

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('karaoke.urls')),
    url(r'^', include('recsys.urls')),
]
