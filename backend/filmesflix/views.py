from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from filmesflix.models import Filmes
from filmesflix.serializers import FilmesSerializer

class FilmesList(APIView):
    serializer_class = FilmesSerializer

    def get(self, request):
        movies = Filmes.objects.all()
        movie_serializer = self.serializer_class(movies, many=True)
        return Response(movie_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        movie_serializer = self.serializer_class(data=request.data)
        if movie_serializer.is_valid():
            movie_serializer.save()
            return Response(movie_serializer.data, status=status.HTTP_201_CREATED)
        return Response(movie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FilmesPorID(APIView):
    serializer_class = FilmesSerializer

    def get(self, requests, id):
        try:
            movie = Filmes.objects.get(id=id)
            movie_serializer = self.serializer_class(movie)
            return Response(movie_serializer.data, status=status.HTTP_200_OK)
        except Filmes.DoesNotExist:
            return Response({'message': 'Movie not found'}, status=status.HTTP_404_NOT_FOUND)


class FilmesEdit(APIView):
    serializer_class = FilmesSerializer

    def put(self, request, id):
        try:
            movie = Filmes.objects.get(id=id)
            movie_serializer = self.serializer_class(movie, data=request.data)
            if movie_serializer.is_valid():
                movie_serializer.save()
                return Response(movie_serializer.data, status=status.HTTP_200_OK)
            return Response(movie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Filmes.DoesNotExist:
            return Response({'message': 'Movie not found'}, status=status.HTTP_404_NOT_FOUND)
        
class FilmesDelete(APIView):
    serializer_class = FilmesSerializer

    def delete(self, request, id):
        try:
            movie = Filmes.objects.get(id=id)
            movie.delete()
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)
        except Filmes.DoesNotExist:
            return Response({'message': 'Movie not found'}, status=status.HTTP_404_NOT_FOUND)

