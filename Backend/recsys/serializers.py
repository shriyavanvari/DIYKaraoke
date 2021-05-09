from rest_framework import serializers

from recsys.models import recommendation


class listenCountSerializer(serializers.Serializer):
    id = serializers.CharField(required=True)


class itembasedInputSerializer(serializers.Serializer):
    id = serializers.CharField(required=True)
    song_id1 = serializers.CharField(required=True)
    song_id2 = serializers.CharField(required=True)
    song_id3 = serializers.CharField(required=True)
    song_id4 = serializers.CharField(required=True)
    song_id5 = serializers.CharField(required=True)
    song_id6 = serializers.CharField(required=True)
    song_id7 = serializers.CharField(required=True)
    song_id8 = serializers.CharField(required=True)
    song_id9 = serializers.CharField(required=True)
    song_id10 = serializers.CharField(required=True)


class utilityMatrixSerializer(serializers.Serializer):
    song_id = serializers.CharField(required=True)
    user_id = serializers.CharField(required=True)
    rating = serializers.IntegerField(required=True)


class recommendationsSerializer(serializers.Serializer):
    class Meta:
        model = recommendation
        fields = ("song_id", "user_id")

class admin_import_karaokeSerializer(serializers.Serializer):
    id = serializers.CharField(required=True)
    albumArt = serializers.CharField(required=True)
    file = serializers.CharField(required=True)