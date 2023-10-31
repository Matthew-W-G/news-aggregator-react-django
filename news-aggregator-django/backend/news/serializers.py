# import serializers from the REST framework
from rest_framework import serializers

# import the todo data model
from .models import NewsPiece


# create a serializer class
class NewsPieceSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = NewsPiece
        fields = ('title', 'blurb', 'source', 'url', 'date','category', 'image')