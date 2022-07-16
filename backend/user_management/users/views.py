from rest_framework import generics
from rest_framework import views
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.tokens import default_token_generator
from users.models import CustomUser
from users.serializers import UserListSerializer
from users.permissions import UserListCreatePermission


class UsersListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = (
        UserListCreatePermission,
    )
    serializer_class = UserListSerializer

    def get_queryset(self):
        return CustomUser.objects.all()


class UserActivateView(views.APIView):
    permission_classes = (
        AllowAny,
    )

    def get(self, request):
        user = CustomUser.objects.filter(id=request.GET.get('user')).first()
        token = request.GET.get('token')
        if not default_token_generator.check_token(user, token):
            return Response(data={'message': 'User not found or token is expired'}, status=status.HTTP_200_OK)
        user.is_active = True
        user.save()
        return Response(data={'message': 'User successfully confirmed'}, status=status.HTTP_200_OK)
