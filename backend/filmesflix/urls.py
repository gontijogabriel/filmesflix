from django.urls import path
from filmesflix.views import lista_filmes, detalhes_filme, add_filme

urlpatterns = [
    # Exemplos de URLs:
    path('filmes/', lista_filmes, name='lista_filmes'),
    path('filmes/<int:id>/', detalhes_filme, name='detalhes_filme'),
    path('filmes/add/', add_filme, name='add_filme'),
    #path('filmes/editar/<int:id>/', views.editar_filme, name='editar_filme'),
    #path('filmes/deletar/<int:id>/', views.deletar_filme, name='deletar_filme'),
]
