from django.http import HttpResponse
from django.http import JsonResponse
from filmesflix.serializer import FilmesSerializer
from filmesflix.models import Filmes
from rest_framework.decorators import api_view
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import json


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

@api_view(['GET'])
@swagger_auto_schema(
    operation_summary="Detalhes do Filme",
    operation_description="Retorna os detalhes de um filme com base no ID.",
    responses={200: openapi.Response("Successful", schema=openapi.Schema(type=openapi.TYPE_OBJECT))},
)
def detalhes_filme(request, id):
    try:
        filme = Filmes.objects.get(id=id)
        filme_details = {
            "id": filme.id,
            "titulo": filme.titulo,
            "descricao": filme.descricao,
            "tema": filme.tema,
            "indicacao": filme.indicacao,
            "estreia": filme.estreia,
            "atores_principais": filme.atores_principais,
            "likes": filme.likes,
            "deslikes": filme.deslikes
        }
        return Response({"filme": filme_details})
    except Filmes.DoesNotExist:
        return Response({"filme": "Filme não encontrado."}, status=404)
    except Exception as e:
        return HttpResponse(status=500, content=f'Erro: {str(e)}')


@api_view(['POST'])
@swagger_auto_schema(
    operation_summary="Adicionar Filme",
    operation_description="Adicione um novo filme.",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'titulo': openapi.Schema(type=openapi.TYPE_STRING, description='Título do filme'),
            'descricao': openapi.Schema(type=openapi.TYPE_STRING, description='Descrição do filme'),
            'tema': openapi.Schema(type=openapi.TYPE_STRING, description='Tema do filme'),
            'indicacao': openapi.Schema(type=openapi.TYPE_STRING, description='Classificação indicativa do filme'),
            'estreia': openapi.Schema(type=openapi.TYPE_STRING, description='Data de estreia do filme'),
            'atores_principais': openapi.Schema(type=openapi.TYPE_STRING, description='Atores principais do filme'),
        },
        required=['titulo', 'descricao', 'tema'],  # Especifique quais campos são obrigatórios
    ),
    responses={201: openapi.Response("Created", schema=openapi.Schema(type=openapi.TYPE_OBJECT))},
    parameters=[
        openapi.Parameter('Authorization', openapi.IN_HEADER, description='Token de autorização', type=openapi.TYPE_STRING),
    ],
)
def add_filme(request):
    try:
        data = json.loads(request.body.decode('utf-8'))  # Transforma os dados JSON em um dicionário Python
        novo_filme = Filmes.objects.create(
            titulo=data['titulo'],
            descricao=data['descricao'],
            tema=data['tema'],
            indicacao=data['indicacao'],
            estreia=data['estreia'],
            atores_principais=data['atores_principais']
        )
        return JsonResponse({"message": "Filme adicionado com sucesso"}, status=201)
    except Exception as e:
        return JsonResponse({"error": "Erro ao adicionar filme", "details": str(e)}, status=400)
