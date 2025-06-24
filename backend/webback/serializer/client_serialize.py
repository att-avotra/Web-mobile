
from rest_framework import serializers
from webback.models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Client
        fields=['numClient','nom','contact','numCodePostal']
        