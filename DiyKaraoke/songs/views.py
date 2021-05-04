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

class SongsViewSet(viewsets.ModelViewSet):
    serializer_class = SongsSerializer
    queryset = Songs.objects.all()
    permission_classes = [AllowAny]

class FileUploadView(views.APIView):
    parser_classes = [MultiPartParser,FormParser]


    def post(self, request, filename, format=None):
        print(request)
        # file_obj = AudioSegment.from_file(file_obj,format='m4a')
        # file_obj.export("audio1.mp3",format='mp3')
        #
        # process = subprocess.run(["python",''])

        return Response(status=204)
