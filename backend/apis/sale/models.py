from django.db import models


from ..car.models import Car
from ..customer.models import Customer


class Sale(models.Model):
    """Sale django model class

    Args:
        id (int): Primary key of Sale.
        dateOfPurchase (Date): The date when the sale happened.
        sellingPrice (int): The price at which the sale happened.
        cars (List): Cars which were sold.
        customers (List): Customers who bought the cars.
    """
    id: int = models.BigAutoField(primary_key=True)
    dateOfPurchase = models.DateField(auto_now=True, blank=True)
    sellingPrice: int = models.PositiveBigIntegerField(blank=False, null=False)
    cars: Car = models.ManyToManyField(
        Car, related_name='sale_cars', blank=False)
    customers: Customer = models.ManyToManyField(
        Customer, related_name='sale_customers', blank=False)
