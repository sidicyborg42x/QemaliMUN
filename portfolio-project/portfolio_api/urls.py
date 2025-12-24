# portfolio-project/portfolio_api/urls.py
from .views import EventViewSet, ApplicationViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'applications', ApplicationViewSet) # New endpoint: /api/applications/

urlpatterns = [
    path('', include(router.urls)),
]