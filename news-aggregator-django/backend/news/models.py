from django.db import models

class NewsPiece(models.Model):
    title = models.CharField(max_length=100, default="")
    blurb = models.TextField(default="", null=True)
    source = models.CharField(max_length=100, default="")
    url = models.CharField(max_length=100, default="")
    date = models.CharField(max_length=100, default="")
    category = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.title




