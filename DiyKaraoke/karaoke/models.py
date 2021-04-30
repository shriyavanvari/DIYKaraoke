from djongo import models
from djongo.storage import GridFSStorage
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManger

Seasons_choices = (
    ("Spring", "spring"),
    ("Summer", "summer"),
    ("Fall", "fall"),
    ("Winter", "winter"),
)


# Create your models here.
class Songs(models.Model):
    gridFS = GridFSStorage(collection='songs')
    title = models.CharField(max_length=200, blank=True)
    season = models.CharField(blank=True, max_length=10, choices=Seasons_choices)
    artist = models.CharField(max_length=200, blank=True)
    genre = models.CharField(max_length=200, blank=True)
    country = models.CharField(max_length=50, blank=True)
    album = models.CharField(max_length=200, blank=True)
    language = models.CharField(max_length=100, blank=True)
    lyrics = models.CharField(max_length=1000, blank=True)
    time = models.DateTimeField(blank=True)
    yearReleased = models.IntegerField(max_length=4, blank=True)
    albumArt = models.ImageField(upload_to='images/', blank=True)
    file = models.FileField(upload_to='songs/', storage=gridFS, blank=True)
    fingerprint = models.FileField(upload_to='fingerprints/', storage=gridFS, blank=True)

    def __str__(self):
        return self.title


class CustomUser(AbstractUser):
    username = None
    _id = models.ObjectIdField(primary_key=True, auto_created=True, unique=True)
    email = models.EmailField('email address', unique=True)
    first_name = models.CharField('First Name', max_length=255, blank=True,
                                  null=False)
    last_name = models.CharField('Last Name', max_length=255, blank=True,
                                 null=False)
    objects = CustomUserManger()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return f"{self.email} - {self.first_name} {self.last_name}"


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    region = models.CharField(max_length=255, blank=True)
    language = models.CharField(max_length=255, blank=True)


# class UtilityMatrix(models.Model):
#     user_id = models.CharField(max_length=200, blank=True)
#     song_id = models.CharField(max_length=200, blank=True)
#     listen_count = models.IntegerField(max_length=4, blank=True)
#
