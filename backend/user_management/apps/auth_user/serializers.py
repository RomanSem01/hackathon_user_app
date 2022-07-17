from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomObtainTokenSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['username'] = self.user.username
        data['is_active'] = self.user.is_active
        return data

    @classmethod
    def get_token(cls, user):
        token = super(CustomObtainTokenSerializer, cls).get_token(user)
        token['username'] = user.username
        return token
