from django.shortcuts import render
from .models import Songs
from .serializers import SongsSerializer
from rest_framework import viewsets
from rest_framework import views
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser,FormParser
from pydub import AudioSegment
import subprocess
from rest_framework.response import Response
from django.http import JsonResponse
from django.core import serializers

class SongsViewSet(viewsets.ModelViewSet):
    serializer_class = SongsSerializer
    queryset = Songs.objects.all()
    permission_classes = [AllowAny]

class FileUploadView(views.APIView):
    parser_classes = [MultiPartParser,FormParser]
    queryset = Songs.objects.all()

    def post(self, request, format=None):
        print(request.FILES['file'])
        file_obj = request.FILES['file']
        file_obj = AudioSegment.from_file(file_obj,format='m4a')
        file_obj.export("audio1.mp3",format='mp3')
        #TODO write subprocess for passing the data to songs recognition and getting the title
        subprocess.call(['python','fingerprint/recognize-from-file.py','-f','audio1.mp3'])
        song_obj = Songs.objects.filter(title = '7 rings')
        song_json = serializers.serialize('json',song_obj)
        print(type(song_json))

        return Response(song_json, status=204)
