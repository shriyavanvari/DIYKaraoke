from rest_framework import routers
from .api import SongsViewSet

router = routers.DefaultRouter()
router.register('api/songs',SongsViewSet,'songs')

urlpatterns = router.urls
