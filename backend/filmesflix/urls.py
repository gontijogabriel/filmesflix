from django.urls import path, include
from rest_framework import routers
from filmesflix.views import FilmesList, LikesDelikesList

app_name = 'filmesflix'

urlpatterns = [
    path('filmes/', FilmesList.as_view(actions={'get': 'list', 'post': 'create'}), name='filmes-list'),
#    path('filmes/add/', FilmesAdd.as_view(), name='filmes-list'),
#    path('filmes/<int:id>/', FilmesPorID.as_view(), name='filmes-id'),
#    path('filmes/edit/<int:id>/', FilmesEdit.as_view(), name='filmes-edit'),
#    path('filmes/del/<int:id>/', FilmesDelete.as_view(), name='filmes-delete'),
    path('feedbacks/', LikesDelikesList.as_view(actions={'get': 'list'}), name='likes-dislikes-list'),
]