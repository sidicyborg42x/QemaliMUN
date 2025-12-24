from rest_framework import viewsets, mixins
from .models import Event, Application
from .serializers import EventSerializer, ApplicationSerializer

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows events to be viewed.
    """
    queryset = Event.objects.all().order_by('date')
    serializer_class = EventSerializer

class ApplicationViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    API endpoint that allows student applications to be created.
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer