from rest_framework import viewsets
from filmesflix.models import Filmes
from filmesflix.serializers import FilmesSerializer


class FilmesViewSet(viewsets.ModelViewSet):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer