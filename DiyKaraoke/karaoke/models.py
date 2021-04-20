from djongo import models
from djongo.storage import GridFSStorage


# Create your models here.
class Songs(models.Model):
    gridFS = GridFSStorage(collection = 'songs')
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    genre = models.CharField(max_length=200)
    # file = models.FileField(upload_to='songs/', storage=gridFS)
    album = models.CharField(max_length=200)
    yearReleased = models.IntegerField(max_length=4)
    albumArt = models.ImageField(upload_to='images/',blank = True)
    lyrics = models.CharField(max_length = 1000, blank=True)

    def __str__(self):
        return self.title


