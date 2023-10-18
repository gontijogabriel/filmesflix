from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from filmesflix.views import FilmesList, LikesDelikesList

schema_view = get_schema_view(
    openapi.Info(
        title="API Filmes Flix",
        default_version='v1',
        description="Descrição da Sua API",
        terms_of_service="https://www.google.com/",
        contact=openapi.Contact(email="contato@suaapi.com"),
        license=openapi.License(name="Licença da Sua API"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('api/', include('filmesflix.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += [
    #path('api/', include(('filmesflix.urls', 'filmesflix'), namespace='feedbacks')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


