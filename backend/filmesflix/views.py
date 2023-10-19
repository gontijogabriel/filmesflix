from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, filters
from django.http import HttpResponse
from filmesflix.models import Filmes
from filmesflix.serializers import FilmesSerializer

class FilmesList(viewsets.ModelViewSet):
    """
    Uma visualização que fornece ação GET
    """
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer
    filter_backends = [filters.SearchFilter]
    
    action_to_serializer = {
        'get': 'list',
    }
    
    search_fields = ['id']

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

