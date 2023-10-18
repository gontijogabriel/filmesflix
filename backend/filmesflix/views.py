from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from django.http import HttpResponse
from filmesflix.models import Filmes, LikeDeslikes
from filmesflix.serializers import FilmesSerializer, FilmesLikesDeslikesSerializer

class FilmesList(viewsets.ModelViewSet):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer
    
    action_to_serializer = {
        'get': 'list',
    }
    
    def get_serializer_class(self):
        return self.serializer_class

    def get_queryset(self):
        return self.queryset

class LikesDelikesList(viewsets.ModelViewSet):
    queryset = LikeDeslikes.objects.all()
    serializer_class = FilmesLikesDeslikesSerializer

    action_to_serializer = {
        'get': 'list',
        'post': 'create',
    }
    
    def get_serializer_class(self):
        return self.serializer_class

    def get_queryset(self):
        return self.queryset

