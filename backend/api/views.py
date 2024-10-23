from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView, RetrieveDestroyAPIView, UpdateAPIView, RetrieveAPIView, DestroyAPIView
)
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet


from .models import (
  User,
  Account, 
  Platform,
  AccountMetric,
)
from .serializers import (
    AccountSerializer,
    PlatformSerializer,
    AccountMetricSerializer,
    UserSerializer,
)


class UserViewSet(ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

  def put(self, request, *args, **kwargs):
    return self.partial_update(request, *args, **kwargs)

  def patch(self, request, *args, **kwargs):
    return self.partial_update(request, *args, **kwargs)


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
            print(f"User ID: {user_id}")  # Debugging output

        if status is not None:
            queryset = queryset.filter(status=status)
        
        if account_type is not None:
            queryset = queryset.filter(type=account_type)

        if platform_name is not None:
            queryset = queryset.filter(platform__name=platform_name)

        return queryset

    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class AccountMetricViewSet(ModelViewSet):
  queryset = AccountMetric.objects.all()
  serializer_class = AccountMetricSerializer
  # permission_classes = [IsAdminUser]