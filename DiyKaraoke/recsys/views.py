import pandas as pd
from django.db.models import Count
from django.http import HttpResponse, JsonResponse
from pandas import DataFrame
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core import serializers as serilib

from . import serializers
from .models import song_listen_count, utility_matrix, recommendation, song_lyrics
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
        # serializer = listenCountSerializer(data=request.data)
        songs = song_listen_count.objects.all().order_by('-listen_count')
        if songs:
            json_data = []
            for song in songs:
                json_data.append({"song_id": song.song_id, "frequency": song.listen_count})
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

    # @action(methods=['GET'], detail=False)
    # def get_item_recommendations(self, request):
    #     songs = utility_matrix.objects.all().order_by('-listen_count')
    #     # song_listen_count.objects.all().values('actor').annotate(total=Count('actor')).order_by('total')
    #     print(utility_matrix.objects.all())
    #     # song_df = pd.pivot_table(utility_matrix.objects.all(), values='rating', index='user_id', columns='song_id')
    #     song_df = pd.pivot_table(utility_matrix.objects.all())
    #     song_grouped = utility_matrix.objects.all().annotate(total=Count('song_id')).order_by('rating')
    #     print("Manasa")
    #     print(pd.DataFrame(song_df))
    #     songs_crosstab: DataFrame = pd.DataFrame(song_df)
    #     songs_crosstab.head()
    #     # predictor_song_ratings = songs_crosstab[request.GET.get('song_id')]
    #     predictor_song_ratings = songs_crosstab['1']
    #     similar_songs = songs_crosstab.corrwith(predictor_song_ratings)
    #     corr_listened_song = pd.DataFrame(similar_songs, columns=['pearsonR'])
    #     corr_listened_song.dropna(inplace=True)
    #     predictor_corr_summary = corr_listened_song.join(song_grouped['rating'])
    #     predictor_corr_summary = predictor_corr_summary.sort_values('pearsonR', ascending=False)
    #     final_recommended_songs = predictor_corr_summary[predictor_corr_summary.pearsonR < 0.9999]
    #     final_recommended_songs.sort_values('pearsonR', ascending=False)
    #     final_recommended_songs = final_recommended_songs.reset_index()
    #     song_df_one = song_df.drop(['rating'], axis=1)
    #     similar_songs = pd.merge(final_recommended_songs, song_df_one.drop_duplicates(["song_id"]), on="song_id",
    #                              how="left")
    #     similar_songs = similar_songs.sort_values('pearsonR', ascending=False)
    #     return similar_songs.head(50)

    @action(methods=['GET'], detail=False)
    def recommender_item_based_similar_songs(self, request):
        songmetadata = pd.read_csv(
            r'/Users/devarakondasantosh/Desktop/Fresh/DIYKaraoke/DiyKaraoke/recsys/song_data.csv')
        othersongdata = pd.read_fwf(r'/Users/devarakondasantosh/Desktop/Fresh/DIYKaraoke/DiyKaraoke/recsys/10000.txt')
        othersongdata.columns = ['user_id', 'song_id', 'listen_count']
        song_df = pd.merge(othersongdata, songmetadata.drop_duplicates(['song_id']), on="song_id", how="left")
        song_grouped = pd.DataFrame(song_df.groupby('song_id')['listen_count'].count())
        songs_crosstab = pd.pivot_table(song_df, values='listen_count', index='user_id', columns='song_id')
        songs_crosstab.head()
        predictor_song_ratings = songs_crosstab['1']
        similar_songs = songs_crosstab.corrwith(predictor_song_ratings)
        corr_listened_song = pd.DataFrame(similar_songs, columns=['pearsonR'])
        corr_listened_song.dropna(inplace=True)
        predictor_corr_summary = corr_listened_song.join(song_grouped['listen_count'])
        predictor_corr_summary = predictor_corr_summary.sort_values('pearsonR', ascending=False)
        final_recommended_songs = predictor_corr_summary[predictor_corr_summary.pearsonR < 0.9999]
        final_recommended_songs.sort_values('pearsonR', ascending=False)
        final_recommended_songs = final_recommended_songs.reset_index()
        song_df_one = song_df.drop(['listen_count'], axis=1)
        similar_songs = pd.merge(final_recommended_songs, song_df_one.drop_duplicates(["song_id"]), on="song_id",
                                 how="left")
        similar_songs = similar_songs.sort_values('pearsonR', ascending=False)
        return similar_songs.head(50)
