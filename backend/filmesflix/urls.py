from django.urls import path, include
from rest_framework import routers
from filmesflix.views import FilmesList, FilmesAdd, FilmesPorID, FilmesEdit, FilmesDelete

router = routers.DefaultRouter()

router.register(r'filmes', FilmesList)

urlpatterns = [
    path('filmes/', include(router.urls)),
#    path('filmes/add/', FilmesAdd.as_view(), name='filmes-list'),
#    path('filmes/<int:id>/', FilmesPorID.as_view(), name='filmes-id'),
#    path('filmes/edit/<int:id>/', FilmesEdit.as_view(), name='filmes-edit'),
#    path('filmes/del/<int:id>/', FilmesDelete.as_view(), name='filmes-delete'),
]