# Generated by Django 4.2.6 on 2023-11-06 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filmesflix', '0012_alter_filmes_total_votos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filmes',
            name='indicacao',
            field=models.CharField(choices=[(0, 'Livre'), (1, '10+'), (2, '12+'), (3, '14+'), (4, '16+'), (5, '18+')], max_length=10),
        ),
        migrations.AlterField(
            model_name='filmes',
            name='tema',
            field=models.CharField(choices=[(0, 'Acao'), (1, 'Aventura'), (2, 'Comedia'), (3, 'Drama'), (4, 'Ficcao Cientifica'), (5, 'Guerra'), (6, 'Romance'), (7, 'Terror'), (8, 'Animacao'), (9, 'Musical'), (10, 'Crime'), (11, 'Historia Real')], max_length=50),
        ),
    ]