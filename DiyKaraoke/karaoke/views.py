from django.shortcuts import render
from django.http import JsonResponse
from .models import Songs
from .serializers import SongsSerializer
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    rest_list = Songs.objects.order_by('-artist')
    context = {'songs_list': rest_list}
    return render(request,'website.html',context)


def get_rest_list(request):
    if request.method == 'GET':
        songs_list = Songs.objects.order_by('-artist')
        serializer = SongsSerializer(songs_list, many= True)
        return JsonResponse(serializer.data, safe = False)
