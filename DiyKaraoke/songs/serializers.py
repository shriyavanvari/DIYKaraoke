from rest_framework import serializers
from .models import Songs

class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"

class recognition_serializer(serializers.Serializer):
    title=serializers.CharField(required=True)


