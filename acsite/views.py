from django.shortcuts import render
from acsite.models import Category, Image, Product
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, render_to_response
from acsite.forms import *
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import get_list_or_404, get_object_or_404
import datetime
from datetime import date
from datetime import datetime
import pytz

from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_protect

from django.template import RequestContext
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})


def index(request):
    top1 = Category.objects.order_by("name")[:1]
    top2 = Category.objects.order_by("name")[1:2]

    product1 = Product.objects.filter(category=top1).order_by("-datefinish")[:3]
    product2 = Product.objects.filter(category=top2).order_by("-datefinish")[:3]
    content = {
        'Category' : Category.objects.all(),
        'Top1' : top1,
        'Top2' : top2,
        'Product1' : product1,
        'Product2' : product2,


    }
    return render(request, 'home.html', content)

def alldepartments(request):
    category = Category.objects.order_by("-name")
    content = {
        'Category' : Category.objects.all(),
        'Departments' : category,
    }
    return render(request, 'alldepartments.html', content)

def contact(request):
    category = Category.objects.order_by("-name")
    content = {
        'Category' : Category.objects.all(),
        'Departments' : category,
    }
    return render(request, 'contact.html', content)

def category(request, pk):
    productlist = Product.objects.filter(category=pk).order_by("-datefinish")
    paginator = Paginator(productlist, 1)
    page = request.GET.get('page')
    try:
        product = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        product = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        product = paginator.page(paginator.num_pages)
    content = {
        'Category' : Category.objects.all(),
        'This' : Category.objects.filter(pk=pk),
        'Products' : product,
    }
    return render(request, 'category.html', content)


def product(request, pk):
    product = Product.objects.filter(pk=pk)
    now = datetime.now(pytz.utc)
    t = now.timetuple()
    for p in product:
        f = p.datefinish
        time = f - now
        x = str(time).split(",")
        c = x[1].split(".")
    content = {
        'TimeDay' : x[0],
        'TimeTime' : c[0],
        'Category' : Category.objects.all(),
        'Product' : Product.objects.filter(pk=pk),
        'Image' : Image.objects.filter(product=pk),
    }
    return render(request, 'product.html', content)

@login_required(login_url='/login/')
def add(request):
    if request.method == 'POST':
        form = AddForm(request.POST, request.FILES)
        if form.is_valid():
            print ('ok')
            pass  # does nothing, just trigger the validation
    else:
        form = AddForm()
    content = {
        'Category' : Category.objects.all(),
        'form': form,
    }
    return render(request, 'add.html', content)
