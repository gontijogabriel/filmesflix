from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from filmesflix.models import Filmes
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

@api_view(['GET'])
@swagger_auto_schema(
    operation_summary="Listar Filmes",
    operation_description="Retorna uma lista de filmes.",
    responses={200: openapi.Response("Successful", schema=openapi.Schema(type=openapi.TYPE_OBJECT))},
)
def lista_filmes(request):
    try:
        filmes = Filmes.objects.all()
        if filmes:
            filmes_list = [
                {"id": filme.id, "titulo": filme.titulo, "descricao": filme.descricao ,"tema": filme.tema ,"indicacao": filme.indicacao, "estreia": filme.estreia, "atores_principais": filme.atores_principais, "likes": filme.likes, "deslikes": filme.deslikes}
                for filme in filmes
            ]
            return Response({"filmes": filmes_list})
        else:
            return Response({"filmes": []})
    except Exception as e:
        return HttpResponse(status=500, content=f'Erro: {str(e)}')

