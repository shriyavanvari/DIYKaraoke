from rest_framework import serializers

from recsys.models import recommendation


class listenCountSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)


class itembasedInputSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)
    song_id1 = serializers.CharField(required=True)
    song_id2 = serializers.CharField(required=True)
    song_id3 = serializers.CharField(required=True)
    song_id4 = serializers.CharField(required=True)
    song_id5 = serializers.CharField(required=True)


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

class admin_import_karaokeSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)
    albumArtUrl = serializers.CharField(required=True)
    audioUrl = serializers.CharField(required=True)