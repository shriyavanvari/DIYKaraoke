from rest_framework import serializers


class listenCountSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)


class utilityMatrixSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)
    user_id = serializers.CharField(required=True)
    rating = serializers.IntegerField(required=True)

class recommendationsSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=False)
    user_id = serializers.CharField(required=False)