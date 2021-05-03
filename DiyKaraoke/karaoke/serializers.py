from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.models import BaseUserManager

from .models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = CustomUser
        fields = ('email','first_name','last_name','password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(**validated_data)
        password = validated_data.pop('password', None)
        user.set_password(password)
        user.save()
        return user

