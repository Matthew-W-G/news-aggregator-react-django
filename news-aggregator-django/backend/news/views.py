from django.shortcuts import render
from rest_framework import viewsets

from .serializers import NewsPieceSerializer

from .models import NewsPiece
from rest_framework.decorators import api_view
from rest_framework.response import Response
from dateutil import parser
from datetime import datetime, timezone
from newsapi.newsapi_client import NewsApiClient
newsapi = NewsApiClient(api_key='a5dd2fee08cd4d7cb814aa9ca5d5f808')



@api_view(['GET', 'POST'])
def articles_list(request):
    remove_outdated()
    if(NewsPiece.objects.all().count() < 50):
        print('need to add new')
        add_articles()
    # remove outdated articles
    # check if database is populated
    # add articles to database if not 
    remove_deleted()

    if request.method == 'GET':
        data = NewsPiece.objects.all()

        serializer = NewsPieceSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)


def remove_outdated():
    TABS = ["Home", "Politics", "Business", "World", "Entertainment", "Opinion"]
    removedOutdated = False
    for tab in TABS:
        for ar in NewsPiece.objects.filter(category = tab):
            datetime_object = parser.parse(ar.date)
            time_since_publish = datetime.now(timezone.utc) - datetime_object
            if time_since_publish.days >= 1:
                removedOutdated = True
                ar.delete()
    return removedOutdated

def remove_deleted():
    for ar in NewsPiece.objects.all():
        if(ar.title=='[Removed]'):
            ar.delete()

def add_articles():
    TABS = ["Home", "Politics", "Business", "World", "Entertainment", "Opinion"]

    for tab in TABS:
        article_list = get_articles(tab)
        for ar in article_list:
            if not NewsPiece.objects.filter(title = ar.get('title'), category = tab).exists():
                NewsPiece(title=ar.get('title'),
                        blurb=ar.get('description'),
                        source=ar.get('source').get('name'),
                        url=ar.get('url'),
                        date=ar.get('publishedAt'),
                        category=tab,
                        image=ar.get('urlToImage')
                        ).save()

def get_articles(tab):
    if tab == "Home": 
        return newsapi.get_top_headlines(language='en', country='us').get('articles')
    elif tab == "Politics":
        return newsapi.get_everything(q='Biden Trump Senate Congress Obama Supreme Court D.C. Election', language='en').get('articles')
    elif tab == "Business":
        return newsapi.get_top_headlines(language='en', category='business', country='us').get('articles')
    elif tab == "World":
        return newsapi.get_everything(q='war world China Russia UN globe', language='en').get('articles')
    elif tab == "Entertainment":
        return newsapi.get_top_headlines(language='en', category='entertainment', country='us').get('articles')
    elif tab == "Opinion":
        return newsapi.get_everything(qintitle='Opinion', language='en').get('articles')