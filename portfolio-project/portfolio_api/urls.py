from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, ApplicationViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'applications', ApplicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]