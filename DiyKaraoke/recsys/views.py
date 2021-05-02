from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core import serializers as serilib

from . import serializers
from .models import song_listen_count, utility_matrix, recommendation
from .serializers import listenCountSerializer, utilityMatrixSerializer, recommendationsSerializer


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
        serializer = listenCountSerializer(data=request.data)
        print("Manasa ====> ")
        songs = song_listen_count.objects.all().order_by('-listen_count')
        if songs:
            # for song in songs:
            #     print(song.song_id)
            # return HttpResponse('You have some songs')

            # json_data = serilib.serialize('json', songs)
            # return HttpResponse(json_data, mimetype='application/json')

            json_data = []
            for song in songs:
                json_data.append({"song_id": song.song_id, "frequency": song.listen_count})
            return JsonResponse(json_data, safe=False)
        else:
            return HttpResponse('You do not have any songs.')
