from rest_framework import viewsets, generics, filters, status
from rest_framework.views import APIView
from rest_framework.response import Response
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
    

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

class FilmesUpdateAvaliacao(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('avaliacao', in_=openapi.IN_QUERY, type=openapi.TYPE_NUMBER, description="Valor da avaliação do filme", required=True),
        ]
    )
    def patch(self, request, pk):  # Alterado de put para patch
        try:
            filme = Filmes.objects.get(pk=pk)
        except Filmes.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        avaliacao = float(request.query_params.get('avaliacao', 0))

        # Atualiza o campo total_votos
        filme.total_votos += 1

        # Atualiza o campo avaliacao com o valor passado como parâmetro de consulta
        filme.avaliacao = (filme.avaliacao * (filme.total_votos - 1) + avaliacao) / filme.total_votos

        filme.save()
        serializer = FilmesSerializer(filme)
        return Response(serializer.data)
