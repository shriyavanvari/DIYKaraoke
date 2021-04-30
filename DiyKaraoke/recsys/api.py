from .models import song_listen_count
from rest_framework import viewsets, permissions
from .serializers import listenCountSerializer


class RecSysViewSet(viewsets.ModelViewSet):
    queryset = song_listen_count.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = listenCountSerializer
