from django.urls import path

from apps.users.views import UsersListCreateAPIView, UserActivateView, UserDestroyView

urlpatterns = [
    path('', UsersListCreateAPIView.as_view(), name='user_list_create_api_view'),
    path('activate/', UserActivateView.as_view(), name='user_activate_view'),
    path("<int:pk>/", UserDestroyView.as_view(), name="details_user"),
]
