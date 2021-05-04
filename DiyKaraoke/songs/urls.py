from django.urls import path,include,re_path
from rest_framework.routers import DefaultRouter
from .views import SongsViewSet, FileUploadView
from django.conf.urls import url

router = DefaultRouter()
router.register(r'songs',SongsViewSet)
urlpatterns = [
    url(r'^',include(router.urls)),
    re_path(r'^upload/', FileUploadView.as_view())
    ]