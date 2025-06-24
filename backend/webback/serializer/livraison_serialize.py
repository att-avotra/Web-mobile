

from rest_framework import serializers
from webback.models import AvisExcpedition

class LivraisonSerializer(serializers.ModelSerializer):
    class Meta:
        model=AvisExcpedition
        fields=['numExp','nomChauffeur','prenomChauffeur','telChauffeur','modeLivraison','immatVehicule','coopVehicule','dateLivraison','numCommande']
        