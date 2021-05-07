from django.shortcuts import render
from .models import Songs
from django.core import serializers
from .serializers import SongsSerializer,  recognition_serializer
from rest_framework import viewsets
from rest_framework import views
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser,FormParser
from pydub import AudioSegment
import subprocess
import json
from django.http import HttpResponse, JsonResponse
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
<<<<<<< HEAD

    def post(self, request, format=None):
        # if request.method == 'POST':
        #     serializer = startCallSerializer(data=request.DATA)
        # serializers = recognition_serializer(data=request.data)
        song_json=[]


        print(request.FILES['file'])
        file_obj = request.FILES['file']
        file_obj = AudioSegment.from_file(file_obj, format='caf')
        file_obj.export("fingerprint/audio1.mp3", format='mp3')

        # TODO write subprocess for passing the data to songs recognition and getting the title

        # subprocess.call(['python2','fingerprint/recognize-from-file.py','-f','fingerprint/audio1.mp3'])
        # writer = subprocess.run(['python2','fingerprint/recognize-from-file.py'],capture_output=True,text=True).stdout
        # # for write in writer.stdout:
        # print(writer)
        output = subprocess.check_output(['python2', 'fingerprint/recognize-from-file.py'],text=True,capture_output=True)

        print(output)

        print("here")
        songs = Songs.objects.filter(title='7 rings')

        song_json = serializers.serialize('json',songs)

        print(song_json)
=======
>>>>>>> ecb897453c47ec8774286ecb6d624c42be1e2cfe

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

<<<<<<< HEAD

        return Response(song_json, status=204)
=======
        return Response(song_json, status=204)
>>>>>>> ecb897453c47ec8774286ecb6d624c42be1e2cfe
