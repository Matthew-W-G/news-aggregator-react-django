# Generated by Django 4.2.6 on 2023-10-20 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_newspiece_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newspiece',
            name='image',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
