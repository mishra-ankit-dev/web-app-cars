from rest_framework import views, status
from rest_framework.response import Response

from .models import Customer
from .serializers import CustomerSerializer


class CustomerListAPIViews(views.APIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def get(self, request, *args, **kwargs):
        try:
            customers = Customer.objects.all()
        except Customer.DoesNotExist:
            return Response(status=404)

        serializer = self.serializer_class(customers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomerDetailAPIViews(views.APIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def get(self, request, pk, *args, **kwargs):
        try:
            customer = Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Customer"}, status=404)

        serializer = self.serializer_class(customer)
        return Response(serializer.data)

    def patch(self, request, pk, *args, **kwargs):
        try:
            customer = Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Customer"}, status=404)

        serializer = self.serializer_class(
            customer, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        try:
            customer_to_be_deleted: Customer = Customer.objects.get(pk=pk)
        except Customer.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Customer"}, status=404)

        serializer = self.serializer_class(customer_to_be_deleted)
        customer_to_be_deleted.delete()
        return Response(serializer.data, status=200)
