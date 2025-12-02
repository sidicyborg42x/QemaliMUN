from django.shortcuts import render


###in this file basically i am using a modelviewset from drf to automatically generate all the necessary get , post ect endpoints
from rest_framework import viewsets 
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

