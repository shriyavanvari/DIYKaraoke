from django.shortcuts import render
from .models import Songs
from .serializers import SongsSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

class SongsViewSet(viewsets.ModelViewSet):
    serializer_class = SongsSerializer
    queryset = Songs.objects.all()
    permission_classes = [AllowAny]
