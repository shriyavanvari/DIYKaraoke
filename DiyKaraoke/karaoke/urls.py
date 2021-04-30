from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from .views import SongsViewSet, AuthViewSet

router = DefaultRouter()
router.register(r'songs', SongsViewSet)
router.register('api/auth', AuthViewSet, basename='auth')
# router.register('api/recsys', RecSysViewSet, basename='increase_listen_count')

urlpatterns = [
    url(r'^', include(router.urls)),
]
