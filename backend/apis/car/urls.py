from django.urls import path
from .views import CarListAPIViews, CarDetailAPIViews

urlpatterns = [
    path('', CarListAPIViews.as_view()),
    path(r'<int:pk>/', CarDetailAPIViews.as_view()),
]
