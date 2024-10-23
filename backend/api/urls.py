from os.path import basename

from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    AccountViewSet,
    PlatformViewSet,
    AccountMetricViewSet,
)

router = DefaultRouter(trailing_slash=False)
router.register(r'users', UserViewSet, basename='users')
router.register(r'accounts', AccountViewSet, basename='accounts')
router.register(r'platforms', PlatformViewSet, basename='platforms')
router.register(r'account_metrics', AccountMetricViewSet, basename='account_metrics')


urlpatterns = [
    path('', include(router.urls))
]
