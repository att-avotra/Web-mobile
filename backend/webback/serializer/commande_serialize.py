
from rest_framework import serializers
from webback.models import Commande

class CommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Commande
        fields=['numCommande','numClient','dateCommande','reference']
        
        