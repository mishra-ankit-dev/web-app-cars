from rest_framework import views, status, permissions
from rest_framework.response import Response

from .models import Sale
from .serializers import SaleSerializer


class SaleListAPIViews(views.APIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        try:
            sales = Sale.objects.all()
        except Sale.DoesNotExist:
            return Response(status=404)

        serializer = self.serializer_class(sales, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SaleDetailAPIViews(views.APIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, pk, *args, **kwargs):
        try:
            sale = Sale.objects.get(pk=pk)
        except Sale.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Sale"}, status=404)

        serializer = self.serializer_class(sale)
        return Response(serializer.data)

    def patch(self, request, pk, *args, **kwargs):
        try:
            sale = Sale.objects.get(pk=pk)
        except Sale.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Sale"}, status=404)

        serializer = self.serializer_class(
            sale, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        try:
            sale_to_be_deleted: Sale = Sale.objects.get(pk=pk)
        except Sale.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Sale"}, status=404)

        sale_to_be_deleted.delete()
        return Response(status=200)
