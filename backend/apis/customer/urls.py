from django.urls import path
from .views import CustomerListAPIViews, CustomerDetailAPIViews

urlpatterns = [
    path('', CustomerListAPIViews.as_view()),
    path(r'<int:pk>/', CustomerDetailAPIViews.as_view()),
]
