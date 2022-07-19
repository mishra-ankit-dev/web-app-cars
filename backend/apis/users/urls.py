from django.urls import path

from .views import *

urlpatterns = [
    path(r'details', UsersDetailsView.as_view(), name="details"),
    path(r'<int:pk>/details', UserDetailView.as_view(), name="user-detail"),
]
