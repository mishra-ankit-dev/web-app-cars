# Generated by Django 4.0.6 on 2022-07-17 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0002_alter_car_airbags_alter_car_mattfinish_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='airBags',
            field=models.BooleanField(choices=[(True, 1), (False, 0)]),
        ),
        migrations.AlterField(
            model_name='car',
            name='mattFinish',
            field=models.BooleanField(choices=[(True, 1), (False, 0)]),
        ),
        migrations.AlterField(
            model_name='car',
            name='musicSystem',
            field=models.BooleanField(choices=[(True, 1), (False, 0)]),
        ),
        migrations.AlterField(
            model_name='car',
            name='powerSteering',
            field=models.BooleanField(choices=[(True, 1), (False, 0)]),
        ),
        migrations.AlterField(
            model_name='car',
            name='sunRoof',
            field=models.BooleanField(choices=[(True, 1), (False, 0)]),
        ),
    ]
