

from rest_framework import serializers
from webback.models import Produit

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model=Produit
        fields=['numProduit','numClassement','numCategorie','libelleProduit','quantite','prixUnitaire','uniteMesure','description','qrCode']
        
        