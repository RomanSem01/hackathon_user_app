from rest_framework import serializers

from apps.users.models import CustomUser


class UserListSerializer(serializers.ModelSerializer):
    check_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields =  [
            'username', 'email', 'password', 'check_password', 
            'first_name', 'last_name', 'job', 'is_staff', 'is_active',
            ]
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 6},
            'is_active': {'read_only': True},
            'is_staff': {'read_only': True},
            }

    def validate(self, attrs):
        if attrs['password'] != attrs['check_password']:
            raise serializers.ValidationError({"error": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create(
            username=validated_data.get('username'),
            email=validated_data.get('email')
        )

        user.set_password(validated_data.get('password'))
        user.save()
        return user
