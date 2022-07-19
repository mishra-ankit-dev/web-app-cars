from django.urls import path
from .views import SaleListAPIViews, SaleDetailAPIViews

urlpatterns = [
    path('', SaleListAPIViews.as_view()),
    path(r'<int:pk>/', SaleDetailAPIViews.as_view()),
]
