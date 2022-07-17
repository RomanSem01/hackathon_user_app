from django.urls import path

from users.views import UsersListCreateAPIView, UserActivateView, UserLoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('', UsersListCreateAPIView.as_view(), name='user_list_create_api_view'),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('activate/', UserActivateView.as_view(), name='user_activate_view'),
    path('login/', UserLoginView.as_view(), name='user_login_view'),
    # path('logout/', UserLogoutView.as_view(), name='user_logout=_view'),
]
