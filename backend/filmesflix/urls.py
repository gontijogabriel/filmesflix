from django.urls import path
from filmesflix.views import lista_filmes

urlpatterns = [
    # Exemplos de URLs:
    path('filmes/', lista_filmes, name='lista_filmes'),
    #path('filmes/<int:id>/', views.detalhes_filme, name='detalhes_filme'),
    #path('filmes/novo/', views.criar_filme, name='criar_filme'),
    #path('filmes/editar/<int:id>/', views.editar_filme, name='editar_filme'),
    #path('filmes/deletar/<int:id>/', views.deletar_filme, name='deletar_filme'),
]
