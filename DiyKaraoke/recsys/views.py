from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from . import serializers
from .models import song_listen_count, utility_matrix
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
            utility_matrix.objects.filter(song_id=request.data['song_id'], user_id=request.data['user_id'])).exists():
                utility_matrix.objects.filter(song_id=request.data['song_id'], user_id=request.data['user_id']). \
                    update(rating=request.data['rating'])
            else:
                utility_matrix.objects.create(song_id=request.data['song_id'], user_id=request.data['user_id'],
                                              rating=request.data['rating'])
        return Response(serializer.data)

    @action(methods=['GET'], detail=False)
    def get_recommendations(self, request):
        serializer = recommendationsSerializer(data=request.data)
        if serializer.is_valid():

            if (
            utility_matrix.objects.filter(song_id=request.data['song_id'], user_id=request.data['user_id'])).exists():
                utility_matrix.objects.filter(song_id=request.data['song_id'], user_id=request.data['user_id']). \
                    update(rating=request.data['rating'])
            else:
                utility_matrix.objects.create(song_id=request.data['song_id'], user_id=request.data['user_id'],
                                              rating=request.data['rating'])
        return Response(serializer.data)
