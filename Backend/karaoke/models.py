from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from .managers import  CustomUserManger


class CustomUser(AbstractUser):
    class Meta:
        app_label= 'karaoke'
    username = None
    email = models.EmailField('email address', unique=True)
    first_name = models.CharField('First Name', max_length=255, blank=True,
                                  null=False)
    last_name = models.CharField('Last Name', max_length=255, blank=True,
                                 null=False)
    objects = CustomUserManger()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']

    def __str__(self):
        return f"{self.email} - {self.first_name} {self.last_name}"

class Profile(models.Model):
    user = models.OneToOneField(CustomUser,on_delete= models.CASCADE)
    region = models.CharField(max_length= 255, blank= True)
    language = models.CharField(max_length=255, blank=True)








