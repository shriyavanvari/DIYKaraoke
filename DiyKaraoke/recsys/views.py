import pandas as pd
from django.db.models import Count
from django.http import HttpResponse, JsonResponse
from pandas import DataFrame
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from karaoke.models import Songs
from . import serializers
# from .lyrics_narrate import returnLyrics
from .models import song_listen_count, utility_matrix, song_lyrics, recommendation, karaokeGenerate
from .serializers import listenCountSerializer, utilityMatrixSerializer, itembasedInputSerializer, \
    admin_import_karaokeSerializer

# Create your views here.

class RecSysViewSet(viewsets.GenericViewSet):
    queryset = song_listen_count.objects.all()
    serializer_class = serializers.listenCountSerializer
    permission_classes = [AllowAny, ]
    # serializer_class = serializers.EmptySerializer
    serializer_classes = {
        'listen_count': serializers.listenCountSerializer,
        'rating': serializers.utilityMatrixSerializer,
    }

    @action(methods=['POST'], detail=False)
    def increase_listen_count(self, request):
        serializer = listenCountSerializer(data=request.data)
        if serializer.is_valid():

            if (song_listen_count.objects.filter(song_id=request.data['song_id'])).exists():
                the_song = song_listen_count.objects.filter(song_id=request.data['song_id'])
                new_listen_count = the_song.values('listen_count')[0]['listen_count'] + 1
                the_song.update(listen_count=new_listen_count)

            else:
                song_listen_count.objects.create(song_id=request.data['song_id'], listen_count=1)
        return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def rating(self, request):
        serializer = utilityMatrixSerializer(data=request.data)
        if serializer.is_valid():

            if (
                    utility_matrix.objects.filter(song_id=request.data['song_id'],
                                                  user_id=request.data['user_id'])).exists():
                utility_matrix.objects.filter(song_id=request.data['song_id'], user_id=request.data['user_id']). \
                    update(rating=request.data['rating'])
            else:
                utility_matrix.objects.create(song_id=request.data['song_id'], user_id=request.data['user_id'],
                                              rating=request.data['rating'])
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def get_recommendations(self, request):
        # serializer = listenCountSerializer(data=request.data)
        songs = song_listen_count.objects.all().order_by('-listen_count')
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"song_id": song.song_id, "frequency": song.listen_count})
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('You do not have any songs.')

    @action(methods=['GET'], detail=False)
    def get_latest_songs(self, request):
        # serializer = listenCountSerializer(data=request.data)
        songs = Songs.objects.all().order_by('-time')
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"title": song.title, "time added": song.time})
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('You do not have any songs.')

    @action(methods=['POST'], detail=False)
    def get_lyrics(self, request):
        serializer = listenCountSerializer(data=request.data)
        if serializer.is_valid():

            if (song_listen_count.objects.filter(song_id=request.data['song_id'])).exists():
                the_song = song_listen_count.objects.filter(song_id=request.data['song_id'])
                new_listen_count = the_song.values('listen_count')[0]['listen_count'] + 1
                the_song.update(listen_count=new_listen_count)

            else:
                song_listen_count.objects.create(song_id=request.data['song_id'], listen_count=1)

        songs = song_lyrics.objects.filter(song_id=request.data['song_id'])
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"song_id": song.song_id, "lyrics": song.lyrics})
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('No lyrics.')

    @action(methods=['POST'], detail=False)
    def admin_import_itembased(self, request):
        serializer = itembasedInputSerializer(data=request.data)
        if serializer.is_valid():

            if (recommendation.objects.filter(song_id=request.data['song_id'])).exists():
                the_song = recommendation.objects.filter(song_id=request.data['song_id'])
                the_song.update(song_id1=request.data['song_id1'],
                                song_id2=request.data['song_id2'],
                                song_id3=request.data['song_id3'],
                                song_id4=request.data['song_id4'],
                                song_id5=request.data['song_id5'])
            else:
                recommendation.objects.create(song_id=request.data['song_id'],
                                              song_id1=request.data['song_id1'],
                                              song_id2=request.data['song_id2'],
                                              song_id3=request.data['song_id3'],
                                              song_id4=request.data['song_id4'],
                                              song_id5=request.data['song_id5'])
        return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def get_item_based(self, request):
        songs = recommendation.objects.filter(song_id=request.data['song_id'])
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"song_id1": song.song_id1,
                                  "song_id2": song.song_id2,
                                  "song_id3": song.song_id3,
                                  "song_id4": song.song_id4,
                                  "song_id5": song.song_id5})
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('No recommendations.')

    @action(methods=['POST'], detail=False)
    def admin_import_karaoke_generate(self, request):
        serializer = admin_import_karaokeSerializer(data=request.data)
        if serializer.is_valid():

            if (karaokeGenerate.objects.filter(song_id=request.data['song_id'])).exists():
                the_song = karaokeGenerate.objects.filter(song_id=request.data['song_id'])
                the_song.update(albumArtUrl=request.data['albumArtUrl'],
                                audioUrl=request.data['audioUrl'], )
            else:
                karaokeGenerate.objects.create(song_id=request.data['song_id'],
                                              albumArtUrl=request.data['albumArtUrl'],
                                              audioUrl=request.data['audioUrl'], )
        return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def generate_karaoke(self, request):
        songs = karaokeGenerate.objects.filter(song_id=request.data['song_id'])
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"albumArtUrl": song.albumArtUrl,
                                  "audioUrl": song.audioUrl, })
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('No karaoke details found.')
