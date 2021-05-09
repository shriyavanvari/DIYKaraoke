from django.db import models
from djongo.storage import GridFSStorage
Seasons_choices = (
    ("Spring","Spring"),
    ("Summer","Summer"),
    ("Fall","Fall"),
    ("Winter","Winter"),
)

# Create your models here.
class Songs(models.Model):
    gridFS = GridFSStorage(collection = 'songs')
    class Meta:
        app_label= 'songs'
    title = models.CharField(max_length=200,blank = True)
    season = models.CharField(blank=True, max_length=10,choices=Seasons_choices)
    artist = models.CharField(max_length=200,blank = True)
    genre = models.CharField(max_length=200,blank = True)
    country = models.CharField(max_length= 50,blank = True)
    album = models.CharField(max_length=200,blank = True)
    language = models.CharField(max_length=100,blank = True)
    time = models.CharField(max_length=200, blank = True)
    yearReleased = models.IntegerField(max_length=4,blank = True)
    frequency = models.IntegerField(default=0)
    albumArt = models.CharField(max_length=200,blank = True)
    lyrics = models.CharField(max_length=200,blank=True)
    file = models.CharField(max_length=200,blank=True)
    fingerprint = models.CharField(max_length=200,blank=True)

    def __str__(self):
        return self.title