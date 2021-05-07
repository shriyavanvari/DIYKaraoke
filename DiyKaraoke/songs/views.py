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

class SongsViewSet(viewsets.ModelViewSet):
    serializer_class = SongsSerializer
    queryset = Songs.objects.all()
    permission_classes = [AllowAny]

class FileUploadView(views.APIView):
    parser_classes = [MultiPartParser,FormParser]
    queryset = Songs.objects.all()

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



        return Response(song_json, status=204)