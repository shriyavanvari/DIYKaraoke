from rest_framework import serializers

from recsys.models import recommendation


class listenCountSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)


class utilityMatrixSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)
    user_id = serializers.CharField(required=True)
    rating = serializers.IntegerField(required=True)

class recommendationsSerializer(serializers.Serializer):
    class Meta:
        model = recommendation
        fields = ("song_id", "user_id")
        # song_id = serializers.CharField(required=False)
        # user_id = serializers.CharField(required=False)