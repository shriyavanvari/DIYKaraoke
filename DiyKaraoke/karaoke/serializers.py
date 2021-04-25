from rest_framework import serializers
from .models import Songs, UserProfile, CustomUser
from django.contrib.auth import get_user_model

class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = "__all__"

# class CreateUserSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = get_user_model()
#         fields = ('username','password','first_name','last_name',"fav_artists","signup2")
#         write_only_fields = ("password")
#         read_only_fields = ("is_staff","is_superuser","is_active")
#
#     def create(self,validated_data):
#         user = super(CreateUserSerializer,self).create(validated_data)
#         user.set_password(validated_data['password'])
#         user.save()
#         return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"

class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    profile = UserProfileSerializer(required = True)

    class Meta:
        model = CustomUser
        fields = ("url",'email', 'first_name','last_name','password','profile')
        extra_kwargs = {'password':{'write_only': True}}

        def create(self,validated_data):
            profile_data = validated_data.pop('profile')
            password = validated_data.pop('password')
            user = CustomUser(**validated_data)
            user.set_password(password)
            user.save()
            UserProfile.objects.create(user= user, **profile_data)
            return user

        def update(self,instance, validated_data):
            profile_data = validated_data.pop('profile')
            profile = instance.profile

            instance.email = validated_data.get('email',instance.emai)
            profile.fav_artist = profile_data.get('fav_artist',profile_data.fav_artist)
            profile.fav_genre = profile_data.get('fav_genre', profile_data.fav_genre)
            profile.country = profile_data.get('country', profile.country)
            profile.language = profile_data.get('language', profile.language)
            profile.save()

            return instance
