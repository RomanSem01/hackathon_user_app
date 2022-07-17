import logging
import random

from faker import Faker
from django.core.management.base import BaseCommand

from apps.users.models import CustomUser


logging.basicConfig(level=logging.INFO)


class Command(BaseCommand):
    help = 'Creates fake user data'

    def handle(self, *args, **options):
        fake = Faker()
        for _ in range(40):
            print('sheeeesh')
            user = CustomUser.objects.create(
                username=fake.user_name(),
                email=fake.email(),
                password=fake.password(length=8),
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                job=fake.job(),
                is_active=random.choice([True, False])
            )
            logging.info(f'Created user with username: {user.username}, email: {user.email},'
                        f'password: {user.password}, fn: {user.first_name}, ln: {user.last_name}'
                        f'job: {user.job}, is_active: {user.is_active}')
