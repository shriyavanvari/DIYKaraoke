from .models import song_listen_count, recommendation
from rest_framework import viewsets, permissions
from .serializers import listenCountSerializer, recommendationsSerializer


class RecSysViewSet(viewsets.ModelViewSet):
    queryset = song_listen_count.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = listenCountSerializer


class UtilityViewSet(viewsets.ModelViewSet):
    queryset = song_listen_count.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = listenCountSerializer


class RecommenderViewSet(viewsets.ModelViewSet):
    queryset = recommendation.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = recommendationsSerializer
