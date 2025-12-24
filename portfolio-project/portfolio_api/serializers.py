from rest_framework import serializers
from .models import Event, Application

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'location', 'date', 'image', 'registration_link']

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['id', 'full_name', 'email', 'school', 'grade', 'motivation', 'applied_at']
        read_only_fields = ['id', 'applied_at']