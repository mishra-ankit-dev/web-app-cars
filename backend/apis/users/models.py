from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class User(AbstractUser):
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.username


Token = Token
