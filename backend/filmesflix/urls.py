from django.urls import path
from filmesflix.views import FilmesList, FilmesPorID, FilmesEdit, FilmesDelete

urlpatterns = [
    path('filmes/', FilmesList.as_view(), name='filmes-list'),
    path('filmes/<int:id>/', FilmesPorID.as_view(), name='filmes-id'),
    path('filmes/edit/<int:id>/', FilmesEdit.as_view(), name='filmes-edit'),
    path('filmes/del/<int:id>/', FilmesDelete.as_view(), name='filmes-delete'),
]