from django.db import models

class Filmes(models.Model):
    class Meta:
        verbose_name_plural = "filmes"


    TEMAS = [
        ('Acao', 'Acao'),
        ('Aventura', 'Aventura'),
        ('Comedia', 'Comedia'),
        ('Drama', 'Drama'),
        ('Ficcao Cientifica', 'Ficcao Cientifica'),
        ('Guerra', 'Guerra'),
        ('Romance', 'Romance'),
        ('Terror', 'Terror'),
        ('Animacao', 'Animacao'),
        ('Musical', 'Musical'),
        ('Crime', 'Crime'),
        ('Historia Real', 'Historia Real'),
    ]

    INDICACAO = [
        ('Livre', 'Livre'),
        ('10+', '10+'),
        ('12+', '12+'),
        ('14+', '14+'),
        ('16+', '16+'),
        ('18+', '18+'),
    ]

    titulo = models.CharField(max_length=100, blank=False, null=False)
    descricao = models.TextField()
    tema = models.CharField(max_length=50, choices=TEMAS, blank=False, null=False)
    indicacao = models.CharField(max_length=10, choices=INDICACAO, blank=False, null=False)
    estreia = models.DateField(blank=False, null=False)
    atores_principais = models.CharField(max_length=255, blank=False, null=False)
    url_imagem = models.TextField()
    avaliacao = models.IntegerField(
        blank=True,
        null=True, 
        default=0,
    )
    total_votos = models.IntegerField(blank=True, null=True, default=0)
    
    def __str__(self):
        return self.titulo