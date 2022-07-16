from django.urls import path

from users.views import UsersListCreateAPIView


urlpatterns = [
    path('', UsersListCreateAPIView.as_view(), name='user_list_create_api_view'),
]
