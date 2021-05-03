from django.contrib import admin
from django.urls import include
from django.conf.urls import url
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('karaoke.urls')),
    url(r'^', include('songs.urls')),
    url(r'^', include('recsys.urls')),
    url('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]
