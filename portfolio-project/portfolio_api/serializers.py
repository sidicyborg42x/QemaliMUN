# portfolio-project/portfolio_api/serializers.py
from rest_framework import serializers
from .models import Event, Application # Import the new model

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['id', 'full_name', 'email', 'school', 'grade', 'motivation', 'applied_at']
        read_only_fields = ['id', 'applied_at']