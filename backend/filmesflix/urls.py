from django.urls import path, include
from rest_framework.routers import DefaultRouter
from filmesflix.views import FilmesViewSet, FilmesSearchAPIView

router = DefaultRouter()
router.register(r'filmes', FilmesViewSet)

urlpatterns = [
    path('api/filmes/search/', FilmesSearchAPIView.as_view({'get': 'list'}), name='filmes-search'),
    path('api/', include(router.urls)),
    # path('api/filmes/<int:pk>/update_avaliacao/', FilmesUpdateAvaliacao.as_view(), name='filmes-update-avaliacao'),
]
