from .models import Songs
from rest_framework import viewsets, permissions
from .serializers import SongsSerializer

#Songs serializers
class SongsViewSet(viewsets.ModelViewSet):
    queryset = Songs.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SongsSerializer