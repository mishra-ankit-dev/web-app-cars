from typing import List
from django.db import models

from ..car.models import Car


class Customer(models.Model):
    """Customer django model class

    Args:
        id (integer): primary key and identifier of customer.
        gender ('Male' | 'Female' | 'Others'): Gender of Customer.
        income ('0 -$25K' | '$25K-$70K' | '>$70K'): Income group of customer.
        region ('North' | 'South' | 'East' | 'West'): The region from where customer belongs.
        maritalStatus (Boolean): Customer's Marital status.
        cars (list): Collection of cars a customer has.
    """
    GENDER = (
        ("MALE", "Male"),
        ("FEMALE", "Female"),
        ("OTHERS", "Others"),
    )
    INCOME_GROUP = (
        ('LOW', '0 -$25K'),
        ('MEDIUM', '$25K-$70K'),
        ('HIGH', '>$70K'),
    )
    REGION = (
        ('NORTH', 'North'),
        ('SOUTH', 'South'),
        ('EAST', 'East'),
        ('WEST', 'West'),
    )
    MARITAL_STATUS = (
        ('MARRIED', 1),
        ('UNMARRIED', 0),
    )

    id: int = models.BigAutoField(primary_key=True)
    gender: str = models.CharField(max_length=6, choices=GENDER, null=False)
    income: str = models.CharField(
        max_length=8, choices=INCOME_GROUP, null=False)
    region: str = models.CharField(max_length=8, choices=REGION, null=False)
    maritalStatus: str = models.CharField(
        max_length=9, choices=MARITAL_STATUS, null=False)
    cars: List[Car] = models.ManyToManyField(
        Car, related_name="cutomer_cars", blank=True)

    def __str__(self) -> str:
        return f"Customer {self.id}"
