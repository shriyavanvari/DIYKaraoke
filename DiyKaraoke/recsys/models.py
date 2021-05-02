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
    user_id = models.CharField(max_length=200, blank=True)
    song1_id = models.CharField(max_length=200, blank=True)
    song2_id = models.CharField(max_length=200, blank=True)
    song3_id = models.CharField(max_length=200, blank=True)
    song4_id = models.CharField(max_length=200, blank=True)
    song5_id = models.CharField(max_length=200, blank=True)