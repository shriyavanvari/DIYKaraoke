from djongo import models
from djongo.storage import GridFSStorage
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

Seasons_choices = (
    ("Spring","spring"),
    ("Summer","summer"),
    ("Fall","fall"),
    ("Winter","winter"),
)

# Create your models here.
class Songs(models.Model):
    gridFS = GridFSStorage(collection = 'songs')
    title = models.CharField(max_length=200,blank = True)
    season = models.CharField(blank=True, max_length=10,choices=Seasons_choices)
    artist = models.CharField(max_length=200,blank = True)
    genre = models.CharField(max_length=200,blank = True)
    country = models.CharField(max_length= 50,blank = True)
    album = models.CharField(max_length=200,blank = True)
    language = models.CharField(max_length=100,blank = True)
    lyrics = models.CharField(max_length = 1000, blank=True)
    time = models.DateTimeField(blank = True)
    yearReleased = models.IntegerField(max_length=4,blank = True)
    albumArt = models.ImageField(upload_to='images/',blank = True)
    file = models.FileField(upload_to='songs/', storage=gridFS, blank=True)
    fingerprint = models.FileField(upload_to='fingerprints/', storage=gridFS,blank=True)

    def __str__(self):
        return self.title

class CustomUser(AbstractUser):
    username = models.CharField(blank=True, null = True,max_length = 10)
    email = models.EmailField(_('email address'),unique = True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name']

    def __str__(self):
        return "{}".format(self.email)

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile")
    fav_artist = models.JSONField(blank=True)
    fav_genre = models.JSONField(blank= True)
    language = models.CharField(blank=True, max_length=12)
    country = models.CharField(blank=True, max_length = 12)






