
from rest_framework import serializers
from webback.models import Utilisateur

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Utilisateur
        fields=['email','password','username']
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }