from rest_framework import serializers
from filmesflix.models import Filmes

class FilmesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filmes
        fields = '__all__'