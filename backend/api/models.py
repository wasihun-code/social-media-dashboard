import datetime
from django.db import models
from django.utils import timezone


# User Model
class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(max_length=128, unique=True)
    phone = models.CharField(max_length=24, null=True, blank=True)
    bio = models.TextField(max_length=224, null=True, blank=True)
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)

    email_notification = models.BooleanField(default=True)
    sms_notification = models.BooleanField(default=False)
    in_app_notification = models.BooleanField(default=True)

    country = models.CharField(max_length=24, null=True, blank=True, default=None)
    city_state = models.CharField(max_length=48, null=True, blank=True, default=None)
    postal_code = models.CharField(max_length=12, null=True, blank=True, default=None)

    password = models.CharField(max_length=128)  # Store the hashed password
    two_factor_auth_enabled = models.BooleanField(default=False)
    two_factor_phone = models.CharField(max_length=24, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


# Social Media Platforms
class Platform(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


# Social Media Accounts
class Account(models.Model):
    ACCOUNT_TYPE_CHOICES = [
        ('Personal', 'Personal'),
        ('Channel', 'Channel'),
        ('Group', 'Group'),
    ]

    STATUS_CHOICES = [
        ('Connected', 'Connected'),
        ('Disconnected', 'Disconnected'),
    ]

    platform = models.ForeignKey(Platform, on_delete=models.CASCADE, related_name="accounts")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="social_accounts")
    name = models.CharField(max_length=128)
    type = models.CharField(max_length=16, choices=ACCOUNT_TYPE_CHOICES)
    status = models.CharField(max_length=16, choices=STATUS_CHOICES)
    last_connected = models.DateField(default=datetime.date.today)

    def __str__(self):
        return f"{self.name} - {self.platform.name}"


# Social Media Metrics
class AccountMetric(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="metrics")
    title = models.CharField(max_length=32)
    count = models.IntegerField()
    percent = models.FloatField()

    def __str__(self):
        return f"{self.title} - {self.account.name}"


# # Recent Uploads
# class RecentUpload(models.Model):
#     account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="uploads")
#     name = models.CharField(max_length=128)
#     data = models.TextField()
#     views = models.IntegerField()
#     likes = models.IntegerField()
#     comments = models.IntegerField()

#     def __str__(self):
#         return f"{self.name} - {self.account.name}"


# # Profile Visitors
# class ProfileVisitor(models.Model):
#     account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="profile_visitors")
#     male_percentage = models.FloatField()
#     female_percentage = models.FloatField()

#     def __str__(self):
#         return f"Visitors for {self.account.name}"
