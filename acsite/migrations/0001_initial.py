# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-12-20 21:17
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=40, null=True)),
                ('description', models.TextField(blank=True, max_length=150, null=True)),
                ('name', models.CharField(max_length=60)),
                ('icon', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('photo', models.FileField(null=True, upload_to='')),
                ('startprice', models.CharField(max_length=50)),
                ('price', models.CharField(max_length=50)),
                ('datestart', models.DateTimeField(default=datetime.datetime(2017, 12, 20, 23, 17, 52, 427274))),
                ('datefinish', models.DateTimeField(default=datetime.datetime(2017, 12, 20, 23, 17, 52, 427274))),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='acsite.Category')),
            ],
        ),
        migrations.AddField(
            model_name='image',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acsite.Product'),
        ),
    ]
