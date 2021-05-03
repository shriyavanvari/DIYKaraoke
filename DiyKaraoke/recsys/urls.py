from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from .views import RecSysViewSet

router = DefaultRouter()
router.register('recsys', RecSysViewSet, basename='increase_listen_count')

urlpatterns = [
    url(r'^', include(router.urls)),
]
