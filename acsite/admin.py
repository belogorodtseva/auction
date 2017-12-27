from django.contrib import admin

from acsite.models import Category, Image, Product

admin.site.register(Category)


class ImageInline(admin.TabularInline):
    model = Image

class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ImageInline,
    ]



admin.site.register(Product, ProductAdmin)
admin.site.register(Image)
