from django.urls import path,include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from .views import SongsViewSet,CreateUserAPIView,LogoutUserAPIView
from django.conf.urls import url


router = DefaultRouter()
router.register('songs',SongsViewSet,'songs')

urlpatterns = [
    path('',include(router.urls)),
    url(r'^auth/login/$',
        obtain_auth_token,
        name='auth_user_login'),
    url(r'^auth/register/$',
        CreateUserAPIView.as_view(),
        name='auth_user_create'),
    url(r'^auth/logout/$',
        LogoutUserAPIView.as_view(),
        name='auth_user_logout')

]
