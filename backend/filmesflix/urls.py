from django.urls import path, include
from rest_framework import routers
from filmesflix.views import FilmesList

app_name = 'filmesflix'

urlpatterns = [
    path('filmes/', FilmesList.as_view(actions={'get': 'list', 'post': 'create'}), name='filmes-list'),
]