from django.urls import path

from apps.auth_user.views import UserLoginView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("login/", UserLoginView.as_view(), name="user_login"),
]
