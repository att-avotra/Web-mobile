

from rest_framework import serializers
from webback.models import Ville

class VilleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ville
        fields=['codePostal','nomVille']
        