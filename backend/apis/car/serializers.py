from pyexpat import model
from rest_framework import serializers
from .models import Car


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'segment', 'fuel', 'powerSteering',
                  'airBags', 'sunRoof', 'mattFinish', 'musicSystem']
