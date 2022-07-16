from django.urls import path

from users.views import UsersListCreateAPIView, UserActivateView, UserLoginView


urlpatterns = [
    path('', UsersListCreateAPIView.as_view(), name='user_list_create_api_view'),
    path('activate/', UserActivateView.as_view(), name='user_activate_view'),
    path('login/', UserLoginView.as_view(), name='user_login_view'),
]
