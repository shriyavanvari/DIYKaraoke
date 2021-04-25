from django.urls import path,include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from .views import SongsViewSet,UserViewSet
from django.conf.urls import url


router = DefaultRouter()
router.register(r'songs',SongsViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^',include(router.urls)),
    url(r'^auth/', include('rest_auth.urls')),
]
