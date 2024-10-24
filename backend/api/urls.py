from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    AccountViewSet,
    PlatformViewSet,
    AccountMetricViewSet,
)

router = DefaultRouter(trailing_slash=False)
router.register(r'users', UserViewSet)
router.register(r'accounts', AccountViewSet)
router.register(r'platforms', PlatformViewSet)
router.register(r'account_metrics', AccountMetricViewSet)


urlpatterns = [
    path('', include(router.urls))
]
