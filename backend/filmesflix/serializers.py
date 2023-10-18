from rest_framework import serializers
from filmesflix.models import Filmes, LikeDeslikes

class FilmesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Filmes
        fields = ["id","titulo","descricao","tema","indicacao","estreia","atores_principais","imagem"]

class FilmesLikesDeslikesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LikeDeslikes
        fields = '__all__'