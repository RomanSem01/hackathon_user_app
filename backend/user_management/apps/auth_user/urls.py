from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from apps.auth_user.views import UserLoginView, UserLogoutView

urlpatterns = [
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("login/", UserLoginView.as_view(), name="user_login"),
    path("logout/", UserLogoutView.as_view(), name="user_login"),
]
