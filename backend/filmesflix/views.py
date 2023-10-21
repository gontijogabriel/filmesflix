from rest_framework import viewsets, generics, filters
from .models import Filmes
from .serializers import FilmesSerializer

class FilmesViewSet(viewsets.ModelViewSet):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer
    

class FilmesSearchAPIView(viewsets.ReadOnlyModelViewSet):
    """Pesquisa por títulos"""
    serializer_class = FilmesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['titulo']

    def get_queryset(self):
        search_query = self.request.query_params.get('titulo', '')
        queryset = Filmes.objects.filter(titulo__icontains=search_query)
        return queryset