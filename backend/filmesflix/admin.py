from django.contrib import admin
from filmesflix.models import Filmes, LikeDeslikes

class FilmesAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'tema', 'indicacao', 'estreia', 'imagem')
    list_filter = ('tema', 'indicacao', 'estreia',)
    search_fields = ('titulo', 'descricao', 'atores_principais',)
    list_per_page = 25

admin.site.register(Filmes, FilmesAdmin)

class LikesDeslikesAdmin(admin.ModelAdmin):
    list_display = ('id_filme', 'likes', 'deslikes')
    list_filter = ('id_filme',)
    search_fields = ('id_filme',)
    list_per_page = 25

admin.site.register(LikeDeslikes, LikesDeslikesAdmin)