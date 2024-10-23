import json
from django.core.management.base import BaseCommand
from api.models import User, Platform, Account, AccountMetric

class Command(BaseCommand):
    help = 'Import data from db.json into the database'

    def handle(self, *args, **kwargs):
        # Load the JSON file
        with open('data/db.json') as json_file:
            data = json.load(json_file)

        # Create platforms
        for platform_data in data['platforms']:
            platform, created = Platform.objects.get_or_create(name=platform_data['name'])
            print(f"Platform '{platform.name}' created: {created}")

        # Create users, local info, notifications, and security info
        for user_data in data['users']:
            user, created = User.objects.get_or_create(
                first_name=user_data['first_name'],
                last_name=user_data['last_name'],
                email=user_data['email'],
                phone=user_data['phone'],
                bio=user_data['bio'],
                profile_image=user_data['profile_image'],

                email_notification=user_data['email_notification'],
                sms_notification=user_data['sms_notification'],
                in_app_notification=user_data['in_app_notification'],

                password=user_data['password'],
                two_factor_auth_enabled=user_data['two_factor_auth_enabled'],
                two_factor_phone=user_data['two_factor_phone']
            )
            
            print(f"User '{user.email}' and associated data created.")

        # Create accounts and metrics
        for account_data in data['accounts']:
            platform = Platform.objects.get(name=account_data['platform'])
            user = User.objects.get(email=account_data['user_email'])

            account, created = Account.objects.get_or_create(
                name=account_data['name'],
                platform=platform,
                user=user,
                type=account_data['type'],
                status=account_data['status'],
                last_connected=account_data['last_connected']
            )

            for metric_data in account_data['metrics']:
                AccountMetric.objects.get_or_create(
                    account=account,
                    title=metric_data['title'],
                    count=metric_data['count'],
                    percent=metric_data['percent']
                )

            print(f"Account '{account.name}' and metrics created.")
