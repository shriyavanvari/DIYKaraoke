from django.db.migrations import serializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.models import BaseUserManager

from .models import Songs, CustomUser


class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(write_only=True, required=True)


class AuthUserSerializer(serializers.ModelSerializer):
    auth_token = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = "__all__"
        read_only_fields = ('id', 'is_active', 'is_staff')

    def get_auth_token(self, obj):
        token = Token.objects.create(user=obj)
        return token.key


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'first_name', 'last_name')

    def validate_email(self, email):
        user = CustomUser.objects.filter(email=email)
        if user:
            raise serializers.ValidationError("Email is already taken")
        return BaseUserManager.normalize_email(email)

    def validate_password(self, value):
        password_validation.validate_password(value)
        return value


class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_current_password(self, value):
        if not self.context['request'].user.check_passwprd(value):
            raise serializer.ValidationError('Current password does not match')
        return value

    def validate_new_password(self, value):
        password_validation.validate_password(value)
        return value


class EmptySerializer(serializers.Serializer):
    pass


# class RecSysSerializer(serializers.Serializer):
#     song_id = serializers.CharField(required=True)
