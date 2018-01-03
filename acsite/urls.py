from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^product/(?P<pk>[0-9]+)/', views.product, name='product'),
    url(r'^add/', views.add, name='add'),
    url(r'^category/(?P<pk>[0-9]+)/', views.category, name='category'),
    url(r'^alldepartments/', views.alldepartments, name='alldepartments'),
    url(r'^contact/', views.contact, name='contact'),
    url(r'^news/', views.news, name='news'),
    url(r'^search/(?P<search>\w+)',  views.search, name='search'),
    ]
