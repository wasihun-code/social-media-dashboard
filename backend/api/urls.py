from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
  UserViewSet,
  AccountViewSet,
  PlatformViewSet,
  AccountMetricViewSet,
)

router = DefaultRouter()
router.register(r'user', UserViewSet)
router.register(r'account', AccountViewSet)
router.register(r'platform', PlatformViewSet)
router.register(r'account_metric', AccountMetricViewSet)


urlpatterns = [
    path('', include(router.urls))
]
