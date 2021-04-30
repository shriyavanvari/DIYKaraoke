from django.db.models import F
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import SongsSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, status
from django.core.exceptions import ImproperlyConfigured
from django.contrib.auth import logout
from django.db.models import F

from .models import Songs, CustomUser
from . import serializers
from .utils import get_and_authenticate_user, create_user_account


class SongsViewSet(viewsets.ModelViewSet):
    serializer_class = SongsSerializer
    queryset = Songs.objects.all()
    permission_classes = [AllowAny]


class AuthViewSet(viewsets.GenericViewSet):
    permission_classes = [AllowAny, ]
    serializer_class = serializers.EmptySerializer
    serializer_classes = {
        'login': serializers.UserLoginSerializer,
        'register': serializers.UserRegisterSerializer,
        'password-change': serializers.PasswordChangeSerializer,
    }

    @action(methods=['POST', ], detail=False)
    def login(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = get_and_authenticate_user(**serializer.validated_data)
        data = serializers.AuthUserSerializer(user).data
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['POST', ], detail=False)
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = create_user_account(**serializer.validated_data)
        data = serializers.AuthUserSerializer(user).data
        return Response(data=data, status=status.HTTP_201_CREATED)

    @action(methods=['POST', ], detail=False)
    def logout(self, request):
        logout(request)
        data = {'success': 'Successfully logged out'}
        return Response(data=data, status=status.HTTP_200_OK)

    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated, ])
    def password_change(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        request.user.set_password(serializer.validated_data['new_password'])
        request.user.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_serializer_class(self):
        if not isinstance(self.serializer_classes, dict):
            raise ImproperlyConfigured("serializer_classes should be a dict mapping.")
        if self.action in self.serializer_classes.keys():
            return self.serializer_classes[self.action]
        return super().get_serializer_class()


# class RecSysViewSet(viewsets.GenericViewSet):
#     queryset = UtilityMatrix.objects.all()
#     serializer_class = serializers.RecSysSerializer
#     permission_classes = [AllowAny, ]
#     # serializer_class = serializers.EmptySerializer
#     serializer_classes = {
#         'listen_count': serializers.RecSysSerializer,
#     }
#
#     @action(methods=['POST'], detail=False)
#     def increase_listen_count(self, request):
#         serializer = RecSysSerializer(data=request.data)
#         if serializer.is_valid():
#             the_song = UtilityMatrix.objects.filter(song_id=request.data['song_id'])
#             new_listen_count = the_song.values('listen_count')[0]['listen_count'] + 1
#             the_song.update(listen_count=new_listen_count)
#         return Response(serializer.data)
