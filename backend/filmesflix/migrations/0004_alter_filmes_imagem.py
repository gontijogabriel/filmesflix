# Generated by Django 4.2.6 on 2023-10-18 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filmesflix', '0003_remove_filmes_deslikes_remove_filmes_likes_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filmes',
            name='imagem',
            field=models.ImageField(default='default_image.jpg', upload_to='filmes/'),
        ),
    ]
