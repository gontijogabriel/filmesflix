from django.db import models

class Filmes(models.Model):

    OPT_TEMA = (
        ('A', 'Acao'),
        ('AV', 'Aventura'),
        ('C', 'Comedia'),
        ('D', 'Drama'),
        ('F', 'Ficcao Cientifica'),
        ('G', 'Guerra'),
        ('R', 'Romance'),
        ('T', 'Terror'),
        ('A', 'Animação'),
        ('M', 'Musical'),
        ('CR', 'Crime'),
        ('HR', 'Historia Real'),
    )

    OPT_INDICACAO = (
        ('L', 'Livre'),
        ('10', '10+'),
        ('12', '12+'),
        ('14', '14+'),
        ('16', '16+'),
        ('18', '18+'),
    )

    titulo = models.CharField(max_length=100, blank=False, null=False)
    descricao = models.TextField()
    tema = models.CharField(max_length=50, choices=OPT_TEMA, blank=False, null=False)
    indicacao = models.CharField(max_length=10, choices=OPT_INDICACAO, blank=False, null=False)
    estreia = models.DateField(blank=False, null=False)
    atores_principais = models.CharField(max_length=255, blank=False, null=False)
    imagem = models.ImageField(upload_to='filmes/', default='default_image.jpg')

    def __str__(self):
        return self.titulo
    

class LikeDeslikes(models.Model):
    id_filme = models.ForeignKey(Filmes, on_delete=models.CASCADE)
    likes = models.IntegerField(blank=False, null=False, default=0)
    deslikes = models.IntegerField(blank=False, null=False, default=0)

    def __str__(self):
        return self.id_filme