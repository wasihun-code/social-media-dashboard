from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username  

class SocialMediaAccount(models.Model):
    PLATFORM_CHOICES = [
        ('linkedin', 'LinkedIn'),
        ('facebook', 'Facebook'),
        ('instagram', 'Instagram'),
        ('telegram', 'Telegram'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_accounts')
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    account_name = models.CharField(max_length=255)
    account_id = models.CharField(max_length=255, unique=True)
    access_token = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.platform} - {self.account_name}"


class APIIntegration(models.Model):
    social_media_account = models.ForeignKey(SocialMediaAccount, on_delete=models.CASCADE, related_name='api_integrations')
    api_key = models.CharField(max_length=255)
    api_secret = models.CharField(max_length=255)
    access_token = models.CharField(max_length=500)
    refresh_token = models.CharField(max_length=500, blank=True, null=True)
    expires_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"API Integration for {self.social_media_account.account_name} ({self.social_media_account.platform})"