from rest_framework import generics
from rest_framework import views
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from apps.users.models import CustomUser
from apps.users.tokens import account_activation_token
from apps.users.serializers import UserListSerializer, UserDetailsSerializer
from apps.users.permissions import UserListCreatePermission


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
        if not account_activation_token.check_token(user, token):
            return Response(data={'message': 'User not found or token is expired'}, status=status.HTTP_400_BAD_REQUEST)
        user.is_active = True
        user.save()
        return Response(data={'message': 'User successfully confirmed'}, status=status.HTTP_200_OK)


class UserDetailsView(generics.RetrieveDestroyAPIView):
    permission_classes = (
        IsAuthenticated,
    )
    serializer_class = UserDetailsSerializer

    def get_object(self):
        return get_object_or_404(CustomUser, pk=self.kwargs.get('pk'))
    
    def delete(self, request, pk):
        user = self.get_object()
        if user.is_staff:
            return Response(data={"error": "You can't delete admins"}, status=status.HTTP_400_BAD_REQUEST)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
