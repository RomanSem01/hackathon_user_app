from datetime import timedelta, datetime

from django.conf import settings
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
import jwt


class CustomUserManager(BaseUserManager):
    use_in_migrations = True
    
    def _create_user(self, email, password, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_staff", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self._create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name="email",
        unique=True
    )
    username = models.CharField(
        verbose_name="user",
        max_length=64,
        unique=True
    )
    created_on = models.DateTimeField(
        verbose_name="created on",
        auto_now_add=True
    )

    is_staff = models.BooleanField(
        verbose_name="is staff",
        default=False,
    )

    is_active = models.BooleanField(
        verbose_name="is active",
        default=False,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']

    class Meta:
        verbose_name = "User",
        verbose_name_plural = "Users"
    
    @property
    def token(self):
        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        dt = datetime.now() + timedelta(days=1)

        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, algorithm='HS256')

        return token


@receiver(post_save, sender=CustomUser)
def send_activation_email(instance, created, **kwargs):
    if created:
        token = default_token_generator.make_token(instance)
        activation_link = f'https://api-users-management.herokuapp.com/api/users/activate/?user={instance.id}' \
                          f'&token={token}'
        send_mail(
            subject='Account activation',
            message=activation_link,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[instance.email, ]
        )
