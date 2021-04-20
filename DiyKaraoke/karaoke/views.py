from django.shortcuts import render
from django.http import JsonResponse
from .models import Songs
from .serializers import SongsSerializer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
# Create your views here.

class SongsViewSet(viewsets.ModelViewSet):
    #
    # def list(self,request):
    #     songs = Songs.objects.all()
    #     serializer = SongsSerializer(songs,many = True)
    #     return Response(serializer.data)
    #
    # def create(self,request):
    #     serializer = SongsSerializer(data = request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #
    # def retrieve(self,request,pk = None):
    #     queryset = Songs.objects.all()
    #     song = get_object_or_404(queryset, pk = pk)
    #     serializer = SongsSerializer(song)
    #     return Response(serializer.data)

    serializer_class = SongsSerializer
    queryset = Songs.objects.all()



