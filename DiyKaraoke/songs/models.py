from django.db import models
from djongo.storage import GridFSStorage
Seasons_choices = (
    ("Spring","Spring"),
    ("Summer","summer"),
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
    time = models.DateTimeField(blank = True)
    yearReleased = models.IntegerField(max_length=4,blank = True)
    frequency = models.IntegerField(default=0)
    albumArt = models.ImageField(upload_to='images/',blank = True)
    lyrics = models.FileField(blank=True)
    file = models.FileField(upload_to='songs/', storage=gridFS, blank=True)
    fingerprint = models.FileField(upload_to='fingerprints/', storage=gridFS,blank=True)

    def __str__(self):
        return self.title