from rest_framework import serializers
from filmesflix.models import Filmes

class FilmesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Filmes
        fields = ["id","titulo","descricao","tema","indicacao","estreia","atores_principais","url_imagem","likes","deslikes"]

