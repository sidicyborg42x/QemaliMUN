# portfolio-project/portfolio_api/views.py
from rest_framework import viewsets, mixins
from .models import Event, Application
from .serializers import EventSerializer, ApplicationSerializer

# This view only allows POST requests (submitting the form)
class ApplicationViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer