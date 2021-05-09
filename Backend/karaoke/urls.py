from django.urls import path,include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
# from .views import SongsViewSet,AuthViewSet
from .views import BlacklistTokenUpdateView,CustomUserCreate

router = routers.DefaultRouter()
router.register(r'users',CustomUserCreate)
urlpatterns = [
    #05/02/2021 5:42pm
    # url(r'user/create',CustomUserCreate.as_view(),name = "create_user"),

    url(r'^',include(router.urls)),
    url(r'user/logout',BlacklistTokenUpdateView.as_view(),name = "logout"),
]
