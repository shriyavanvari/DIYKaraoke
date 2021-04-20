from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import SongsViewSet

router = DefaultRouter()
router.register('songs',SongsViewSet,'songs')

urlpatterns = [
    path('',include(router.urls))

]
