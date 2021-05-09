from djongo import models
from djongo.storage import GridFSStorage
from django.contrib.auth.models import AbstractUser


class song_listen_count(models.Model):
    song_id = models.CharField(max_length=200, blank=True)
    listen_count = models.IntegerField(max_length=4, blank=True)


class song_lyrics(models.Model):
    song_id = models.CharField(max_length=200, blank=True)
    lyrics = models.IntegerField(max_length=1000, blank=True)


class utility_matrix(models.Model):
    user_id = models.CharField(max_length=200, blank=True)
    song_id = models.CharField(max_length=200, blank=True)
    rating = models.IntegerField(max_length=1, blank=True)


class recommendation(models.Model):
    # user_id = models.CharField(max_length=200, blank=True)
    song_id = models.CharField(max_length=200, blank=True)
    song_id1 = models.CharField(max_length=200, blank=True)
    song_id2 = models.CharField(max_length=200, blank=True)
    song_id3 = models.CharField(max_length=200, blank=True)
    song_id4 = models.CharField(max_length=200, blank=True)
    song_id5 = models.CharField(max_length=200, blank=True)
    song_id6 = models.CharField(max_length=200, blank=True)
    song_id7 = models.CharField(max_length=200, blank=True)
    song_id8 = models.CharField(max_length=200, blank=True)
    song_id9 = models.CharField(max_length=200, blank=True)
    song_id10 = models.CharField(max_length=200, blank=True)


class karaokeGenerate(models.Model):
    song_id = models.CharField(max_length=200, blank=True)
    albumArtUrl = models.CharField(max_length=500, blank=True)
    audioUrl = models.CharField(max_length=500, blank=True)