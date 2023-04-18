from django.contrib import admin
from .models import ProductImage, Product

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    
admin.site.register(Product, ProductAdmin)

# Register your models here.
