from rest_framework import views, status
from rest_framework.response import Response

from .models import Car
from .serializers import CarSerializer


class CarListAPIViews(views.APIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get(self, request, *args, **kwargs):
        try:
            cars = Car.objects.all()
        except Car.DoesNotExist:
            return Response(status=404)

        serializer = self.serializer_class(cars, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CarDetailAPIViews(views.APIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get(self, request, pk, *args, **kwargs):
        try:
            car = Car.objects.get(pk=pk)
        except Car.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Car"}, status=404)

        serializer = self.serializer_class(car)
        return Response(serializer.data)

    def patch(self, request, pk, *args, **kwargs):
        try:
            car = Car.objects.get(pk=pk)
        except Car.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Car"}, status=404)

        serializer = self.serializer_class(
            car, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=False):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        try:
            car_to_be_deleted: Car = Car.objects.get(pk=pk)
        except Car.DoesNotExist:
            return Response(data={'detail': f"Invalid id {pk} for Car"}, status=404)

        serializer = self.serializer_class(car_to_be_deleted)
        car_to_be_deleted.delete()
        return Response(serializer.data, status=200)
