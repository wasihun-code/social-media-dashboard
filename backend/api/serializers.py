from .models import (
   Platform,
   Account, AccountMetric,
   User, UserLocalInfo, UserNotification, UserSecurityInfo
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
    fields = ['email_notification', 'in_app_notification', 'sms_notification']


class UserSecuritySerializer(ModelSerializer):
   class Meta:
      model = UserSecurityInfo
      fields = ['two_factor_auth_enabled', 'two_factor_phone']
  

class UserCombinedSerializer(serializers.ModelSerializer):
  local_info = UserLocalInfoSerializer()
  notifications = UserNotificationSerializer()
  security = UserSecuritySerializer(source='security_info')

  class Meta:
      model = User
      fields = [
        'id', 'first_name', 'last_name', 'email', 'phone', 'bio', 'profile_image', 
        'local_info', 'notifications', 'security'  
      ]


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

