from django.contrib import admin
from filmesflix.models import Filmes

class FilmesAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'tema', 'indicacao', 'estreia', 'url_imagem')
    list_filter = ('tema', 'indicacao', 'estreia',)
    search_fields = ('titulo', 'descricao', 'atores_principais',)
    list_per_page = 25

admin.site.register(Filmes, FilmesAdmin)