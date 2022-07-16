from rest_framework.permissions import BasePermission


class UserListCreatePermission(BasePermission):

    def has_permission(self, request, view):
        print('\n\n\n\n\n')
        print(request.user.is_authenticated)
        if request.method == 'POST':
            return not request.user.is_authenticated
        return request.user.is_authenticated
