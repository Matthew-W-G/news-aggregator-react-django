# Generated by Django 4.1.1 on 2022-09-11 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewsPiece',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100)),
                ('blurb', models.TextField(default='', null=True)),
                ('source', models.CharField(default='', max_length=100)),
                ('url', models.CharField(default='', max_length=100)),
                ('date', models.CharField(default='', max_length=100)),
                ('category', models.CharField(default='', max_length=100)),
            ],
        ),
    ]
