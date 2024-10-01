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
    serializer_class = AccountSerializer
    queryset = Account.objects.all()  # Explicitly define queryset here

    def get_queryset(self):
        queryset = Account.objects.all()
        
        # Get query parameters
        user_id = self.request.query_params.get('user', None)
        status = self.request.query_params.get('status', None)
        account_type = self.request.query_params.get('type', None)
        platform_name = self.request.query_params.get('platform_name', None)

        # Apply filters based on query parameters
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        
        if status is not None:
            queryset = queryset.filter(status=status)
        
        if account_type is not None:
            queryset = queryset.filter(type=account_type)

        if platform_name is not None:
            queryset = queryset.filter(platform__name=platform_name)

        return queryset


class AccountMetricViewSet(ModelViewSet):
  queryset = AccountMetric.objects.all()
  serializer_class = AccountMetricSerializer
  # permission_classes = [IsAdminUser]