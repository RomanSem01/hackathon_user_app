from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny
from apps.auth_user.serializers import CustomObtainTokenSerializer


class UserLoginView(TokenObtainPairView):
    permission_classes = (
        AllowAny,
    )
    serializer_class = CustomObtainTokenSerializer
