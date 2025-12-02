from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows events to be viewed.
    """
    queryset = Event.objects.all().order_by('date')
    serializer_class = EventSerializer
