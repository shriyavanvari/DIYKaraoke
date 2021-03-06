import pandas as pd
from django.db.models import Count
from django.http import HttpResponse, JsonResponse
from pandas import DataFrame
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
import json

from songs.models import Songs
from . import serializers
# from .lyrics_narrate import returnLyrics
# from .models import song_listen_count, utility_matrix, song_lyrics, recommendation, karaokeGenerate
from .models import utility_matrix, recommendation
from .serializers import listenCountSerializer, utilityMatrixSerializer, itembasedInputSerializer, \
    admin_import_karaokeSerializer


# Create your views here.

class RecSysViewSet(viewsets.GenericViewSet):
    queryset = Songs.objects.all()
    serializer_class = serializers.listenCountSerializer
    permission_classes = [AllowAny, ]
    serializer_classes = {
        'frequency': serializers.listenCountSerializer,
        'rating': serializers.utilityMatrixSerializer,
    }

    @action(methods=['POST'], detail=False)
    def increase_listen_count(self, request):
        serializer = listenCountSerializer(data=request.data)
        new_listen_count = 1
        if serializer.is_valid():

            if (Songs.objects.filter(id=request.data['id'])).exists():
                the_song = Songs.objects.filter(id=request.data['id'])
                new_listen_count = the_song.values('frequency')[0]['frequency'] + 1
                the_song.update(frequency=new_listen_count)

            else:
                Songs.objects.create(id=request.data['id'], frequency=1)
        return Response(new_listen_count)

    @action(methods=['POST'], detail=False)
    def rating(self, request):
        serializer = utilityMatrixSerializer(data=request.data)
        if serializer.is_valid():

            if (
                    utility_matrix.objects.filter(id=request.data['id'], )).exists():
                utility_matrix.objects.filter(id=request.data['id'], ). \
                    update(rating=request.data['rating'])
            else:
                utility_matrix.objects.create(id=request.data['id'],
                                              rating=request.data['rating'])
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def get_recommendations(self, request):
        songs = Songs.objects.all()
        if songs:
            json_data = []
            for song in songs:
                # json_data.append({"id": song.id, "frequency": song.frequency})
                json_data.append({"id": song.id,
                                  "title": song.title,
                                  "artist": song.artist,
                                  "albumArt": str(song.albumArt),
                                  "file": str(song.file),
                                  "lyrics": str(song.lyrics)
                                  })
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('You do not have any songs.')

    @action(methods=['GET'], detail=False)
    def get_latest_songs(self, request):
        songs = Songs.objects.all().order_by('-time')
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"id": song.id,
                                  "title": song.title,
                                  "artist": song.artist,
                                  "albumArt": str(song.albumArt),
                                  "file": str(song.file),
                                  "lyrics": str(song.lyrics)
                                  })
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('You do not have any songs.')

    @action(methods=['POST'], detail=False)
    def get_lyrics(self, request):
        serializer = listenCountSerializer(data=request.data)
        if serializer.is_valid():

            if (Songs.objects.filter(id=request.data['id'])).exists():
                the_song = Songs.objects.filter(id=request.data['id'])
                new_listen_count = the_song.values('frequency')[0]['frequency'] + 1
                the_song.update(listen_count=new_listen_count)

            else:
                Songs.objects.create(id=request.data['id'], frequency=1)

        songs = Songs.objects.filter(id=request.data['id'])
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"id": song.id, "lyrics": song.lyrics})
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('No lyrics.')

    @action(methods=['POST'], detail=False)
    def admin_import_itembased(self, request):
        serializer = itembasedInputSerializer(data=request.data)
        if serializer.is_valid():
            if (recommendation.objects.filter(id=request.data['id'])).exists():
                the_song = recommendation.objects.filter(id=request.data['id'])
                the_song.update(song_id1=request.data['song_id1'],
                                song_id2=request.data['song_id2'],
                                song_id3=request.data['song_id3'],
                                song_id4=request.data['song_id4'],
                                song_id5=request.data['song_id5'],
                                song_id6=request.data['song_id6'],
                                song_id7=request.data['song_id7'],
                                song_id8=request.data['song_id8'],
                                song_id9=request.data['song_id9'],
                                song_id10=request.data['song_id10'])
            else:
                recommendation.objects.create(id=request.data['id'],
                                              song_id1=request.data['song_id1'],
                                              song_id2=request.data['song_id2'],
                                              song_id3=request.data['song_id3'],
                                              song_id4=request.data['song_id4'],
                                              song_id5=request.data['song_id5'],
                                              song_id6=request.data['song_id6'],
                                              song_id7=request.data['song_id7'],
                                              song_id8=request.data['song_id8'],
                                              song_id9=request.data['song_id9'],
                                              song_id10=request.data['song_id10'])
        return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def get_item_based(self, request):
        songs = recommendation.objects.filter(id=request.data['id'])
        json_data = []
        if songs:
            for song in songs:
                recommended = {song.song_id1, song.song_id2, song.song_id3, song.song_id4, song.song_id5,
                               song.song_id6, song.song_id7, song.song_id8, song.song_id9, song.song_id10}
                for item in recommended:
                    res = Songs.objects.filter(id=item)
                    for ele in res:
                        json_data.append({"id": ele.id,
                                          "title": ele.title,
                                          "artist": ele.artist,
                                          # "albumArt": json.dumps(str(ele.albumArt)),
                                          "albumArt": str(ele.albumArt),
                                          "file": str(ele.file),
                                          "lyrics": str(ele.lyrics)
                                          })
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('No recommendations.')

    @action(methods=['POST'], detail=False)
    def admin_import_karaoke_generate(self, request):
        serializer = admin_import_karaokeSerializer(data=request.data)
        if serializer.is_valid():

            if (Songs.objects.filter(id=request.data['id'])).exists():
                the_song = Songs.objects.filter(id=request.data['id'])
                the_song.update(albumArtUrl=request.data['albumArt'],
                                audioUrl=request.data['file'], )
            else:
                Songs.objects.create(id=request.data['id'],
                                     albumArtUrl=request.data['albumArt'],
                                     audioUrl=request.data['file'], )
        return Response(serializer.data)

    @action(methods=['POST'], detail=False)
    def generate_karaoke(self, request):
        songs = Songs.objects.filter(id=request.data['id'])
        if songs:
            json_data = []
            for song in songs:
                json_data.append({
                    "albumArt": song.albumArt,
                    "lyrics": song.lyrics, })
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('No karaoke details found.')
