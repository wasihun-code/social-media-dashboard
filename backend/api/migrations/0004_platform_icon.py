# Generated by Django 5.1 on 2024-10-23 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_account_last_connected'),
    ]

    operations = [
        migrations.AddField(
            model_name='platform',
            name='icon',
            field=models.ImageField(blank=True, null=True, upload_to='platform_icon/'),
        ),
    ]
