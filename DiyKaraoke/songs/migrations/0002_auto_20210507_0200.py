# Generated by Django 3.0.5 on 2021-05-07 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='songs',
            name='season',
            field=models.CharField(blank=True, choices=[('Spring', 'Spring'), ('Summer', 'Summer'), ('Fall', 'Fall'), ('Winter', 'Winter')], max_length=10),
        ),
    ]
