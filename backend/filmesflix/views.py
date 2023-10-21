from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, filters
from django.http import HttpResponse
from filmesflix.models import Filmes
from filmesflix.serializers import FilmesSerializer

class FilmesList(viewsets.ModelViewSet):
    """
    Uma visualização que permite ações GET, POST e PUT.
    """
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer
    filter_backends = [filters.SearchFilter]
    
    action_to_serializer = {
        'get': 'list',
        'post': 'create',
        'put': 'update',
    }
    
    search_fields = ['id']