# Generated by Django 4.2.6 on 2023-10-13 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filmesflix', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filmes',
            name='deslikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='filmes',
            name='likes',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='filmes',
            name='tema',
            field=models.CharField(choices=[('A', 'Acao'), ('AV', 'Aventura'), ('C', 'Comedia'), ('D', 'Drama'), ('F', 'Ficcao Cientifica'), ('G', 'Guerra'), ('R', 'Romance'), ('T', 'Terror'), ('A', 'Animação'), ('M', 'Musical'), ('CR', 'Crime'), ('HR', 'Historia Real')], max_length=50),
        ),
    ]
