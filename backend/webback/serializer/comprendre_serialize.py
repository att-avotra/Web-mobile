
from rest_framework import serializers
from webback.models import Comprendre

class ComprendreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comprendre
        fields=['numComprendre','numCommande','numProduit','quantiteCommande']
        
        