from django.db import models

class Filmes(models.Model):
    class Meta:
        verbose_name_plural = "filmes"


    TEMAS = [
        (0, 'Acao'),
        (1, 'Aventura'),
        (2, 'Comedia'),
        (3, 'Drama'),
        (4, 'Ficcao Cientifica'),
        (5, 'Guerra'),
        (6, 'Romance'),
        (7, 'Terror'),
        (8, 'Animacao'),
        (9, 'Musical'),
        (10, 'Crime'),
        (11, 'Historia Real'),
    ]

    INDICACAO = [
        (0, 'Livre'),
        (1, '10+'),
        (2, '12+'),
        (3, '14+'),
        (4, '16+'),
        (5, '18+'),
    ]

    titulo = models.CharField(max_length=100, blank=False, null=False)
    descricao = models.TextField()
    tema = models.CharField(max_length=50, choices=TEMAS, blank=False, null=False)
    indicacao = models.CharField(max_length=10, choices=INDICACAO, blank=False, null=False)
    estreia = models.DateField(blank=False, null=False)
    atores_principais = models.CharField(max_length=255, blank=False, null=False)
    url_imagem = models.TextField()
    
    def __str__(self):
        return self.titulo