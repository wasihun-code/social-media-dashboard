from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser

from .models import (
  Platform,
  Account, AccountMetric,
  User, UserLocalInfo, UserNotification, 
)
from .serializers import (
  PlatformSerializer,
  AccountSerializer, AccountMetricSerializer,
  UserSerializer, UserLocalInfoSerializer, UserNotificationSerializer, 
)

def home(request):
  return HttpResponse("Hello World")

# [IsAdmin | IsStaff]
class UserViewSet(ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  # permission_classes = [IsAdminUser]


class UserLocalInfoViewSet(ModelViewSet):
  queryset = UserLocalInfo.objects.all()
  serializer_class = UserLocalInfoSerializer
  # permission_classes = [IsAdminUser]


class UserNotificationViewSet(ModelViewSet):
  queryset = UserNotification.objects.all()
  serializer_class = UserNotificationSerializer
  # permission_classes = [IsAdminUser]


class PlatformViewSet(ModelViewSet):
  queryset = Platform.objects.all()
  serializer_class = PlatformSerializer
  # permission_classes = [IsAdminUser]


class AccountViewSet(ModelViewSet):
  queryset = Account.objects.all()
  serializer_class = AccountSerializer
  # permission_classes = [IsAdminUser]


class AccountMetricViewSet(ModelViewSet):
  queryset = AccountMetric.objects.all()
  serializer_class = AccountMetricSerializer
  # permission_classes = [IsAdminUser]