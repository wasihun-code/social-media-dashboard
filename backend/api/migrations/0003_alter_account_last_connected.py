# Generated by Django 5.1 on 2024-10-23 18:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_user_city_state_alter_user_country_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='last_connected',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
