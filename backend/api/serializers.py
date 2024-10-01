from .models import (
   Platform,
   Account, AccountMetric,
   User, UserLocalInfo, UserNotification, 
)
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class UserSerializer(ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'


class UserLocalInfoSerializer(ModelSerializer):
  class Meta:
    model = UserLocalInfo
    fields = '__all__'


class UserNotificationSerializer(ModelSerializer):
  class Meta:
    model = UserNotification
    fields = '__all__'


class PlatformSerializer(ModelSerializer):
    class Meta:
      model = Platform
      fields = '__all__'


class AccountSerializer(ModelSerializer):
    platform_name = serializers.CharField(source='platform.name', read_only=True)
    class Meta:
      model = Account
      fields = ['id', 'name', 'type', 'user', 'status', 'last_connected', 'platform_name', 'platform']


class AccountMetricSerializer(ModelSerializer):
    class Meta:
      model = AccountMetric
      fields = '__all__'


# class RecentUploadSerializer(ModelSerializer):
#     class Meta:
#       model = RecentUpload
#       fields = '__all__'


# class ProfileVisitorSerializer(ModelSerializer):
#     class Meta:
#       model = ProfileVisitor
#       fields = '__all__'

