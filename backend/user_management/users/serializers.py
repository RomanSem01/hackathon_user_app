from rest_framework import serializers
from users.models import CustomUser


class UserListSerializer(serializers.ModelSerializer):
    check_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'check_password', ]
        extra_kwargs = {'password': {'write_only': True, 'min_length': 6}}
    
    def create(self, validated_data):
        user = CustomUser.objects.create(
            username = validated_data.get('username'),
            email=validated_data.get('email')
        )

        user.set_password(validated_data.get('password'))
        user.save()
        return user
