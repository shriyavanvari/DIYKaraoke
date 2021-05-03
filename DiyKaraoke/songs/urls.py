from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import SongsViewSet
from django.conf.urls import url

router = DefaultRouter()
router.register(r'songs',SongsViewSet)
urlpatterns = [
    url(r'^',include(router.urls)),
    ]