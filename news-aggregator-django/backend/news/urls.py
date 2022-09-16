from django.contrib import admin

# add include to the path
from django.urls import path, re_path, include

# import views from News
from . import views

# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers

# create a router object
#router = routers.DefaultRouter()

# register the router
#router.register(r'tasks', views.NewsView, 'task')

urlpatterns = [
    re_path(r'^api/newspiece/$', views.articles_list),
    #path('api/', include(router.urls))
]