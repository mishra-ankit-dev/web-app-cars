from django.db import models


class Car(models.Model):
    """Car django model class

    Args:
        id (int): Primary Key for the Car class
        segment (str): To which segment the car belongs
        fuel (str): Type of fuel used by car
        powerSteering (str): Does the car have power steering ?
        airBags (int): Does the car have air bags ?
        sunRoof (int): Does the car have sun roof ?
        mattFinish (int): Does the car have matt finish ?
        musicSystem (int): Does the car have music system ?
    """

    FUEL_TYPE = (
        ('CNG', 'CNG'),
        ('DIESEL', 'Diesel'),
        ('PETROL', 'Petrol'),
    )
    VEHICLE_SEGMENT = (
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
    )
    BOOLEAN_CHOICES = (
        (True, 1),
        (False, 0)
    )

    id: int = models.BigAutoField(primary_key=True)
    segment: str = models.CharField(
        max_length=1, choices=VEHICLE_SEGMENT, null=False)
    fuel: str = models.CharField(max_length=6, choices=FUEL_TYPE, null=False)
    powerSteering = models.BooleanField(choices=BOOLEAN_CHOICES)
    airBags = models.BooleanField(choices=BOOLEAN_CHOICES)
    sunRoof = models.BooleanField(choices=BOOLEAN_CHOICES)
    mattFinish = models.BooleanField(choices=BOOLEAN_CHOICES)
    musicSystem = models.BooleanField(choices=BOOLEAN_CHOICES)

    def __str__(self) -> str:
        return f"Car {self.id}"
