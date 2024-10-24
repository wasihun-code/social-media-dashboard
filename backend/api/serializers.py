from .models import (
   Platform,
   Account, AccountMetric,
   User,
)
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from rest_framework import serializers


class UserSerializer(ModelSerializer):
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'email': {'required': False},  # Not required for updates
            'first_name': {'required': False},  # Optional for updates
            'last_name': {'required': False},  # Optional for updates
            'password': {'required': False}, #optional for updates
            # Add other fields you want to allow to be optional for updates
        }

    def validate_email(self, value):
        if self.instance:
            # Skip unique check for the current user's email
            if User.objects.filter(email=value).exclude(id=self.instance.id).exists():
                raise serializers.ValidationError("This email is already in use.")
        return value


    def get_profile_image(self, obj):
        if obj.profile_image:  # Assuming profile_image is a FileField or ImageField
            return self.context['request'].build_absolute_uri(obj.profile_image.url)
        return None



class PlatformSerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()
    class Meta:
        model = Platform
        depth = 1
        fields = ['name', 'icon']

    def get_icon(self, obj):
        if obj.icon:  # Assuming profile_image is a FileField or ImageField
            return self.context['request'].build_absolute_uri(obj.icon.url)
        return None


class AccountSerializer(serializers.ModelSerializer):
    # platform_icon = serializers.SerializerMethodField()
    platform = PlatformSerializer()

    class Meta:
        model = Account
        depth = 1
        fields = ['name', 'type', 'status', 'last_connected', 'platform']
        extra_kwargs = {
          'name': {'required': False},
          'type': {'required': False},
          'platform': {'required': False},
          'user': {'required': False},
        }

    # This method is needed to provide the 'platform_icon' field
    # def get_platform_icon(self, obj):
    #     if obj.platform and obj.platform.icon:
    #         return self.context['request'].build_absolute_uri(obj.platform.icon.url)
    #     return None



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

