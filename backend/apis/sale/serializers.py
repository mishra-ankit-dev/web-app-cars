from ..car.serializers import CarSerializer
from ..customer.serializers import CustomerSerializer
from .models import Sale
from drf_writable_nested.serializers import WritableNestedModelSerializer


class SaleSerializer(WritableNestedModelSerializer):
    cars = CarSerializer(many=True, read_only=False)
    customers = CustomerSerializer(many=True, read_only=False)

    class Meta:
        depth = 1
        model = Sale
        fields = ['id', 'dateOfPurchase', 'sellingPrice', 'cars', 'customers']
        extra_kwargs = {
            'dateOfPurchase': {'read_only': True},
        }
