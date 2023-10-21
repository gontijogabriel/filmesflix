from django.urls import path, include
from rest_framework.routers import DefaultRouter
from filmesflix.views import FilmesViewSet

router = DefaultRouter()
router.register(r'filmes', FilmesViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]