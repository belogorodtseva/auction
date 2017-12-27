from django.db import models
import datetime
from datetime import date
from datetime import datetime

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=40, blank=True, null=True)
    description = models.TextField(max_length=150, blank=True, null=True)
    name = models.CharField(max_length=60)
    icon = models.FileField(null=False)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=2000, blank=True, null=True)
    photo = models.FileField(null=True)
    startprice = models.CharField(max_length=50)
    price = models.CharField(max_length=50)
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE)
    datestart = models.DateTimeField(default=datetime.now(), null=False, blank=False)
    datefinish = models.DateTimeField(default=datetime.now(), null=False, blank=False)

    def __str__(self):
        return self.name

class Image(models.Model):
   product = models.ForeignKey(Product, on_delete=models.CASCADE)
   photo = models.FileField(blank=True, null=True)
