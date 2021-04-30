from rest_framework import serializers


class listenCountSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)
