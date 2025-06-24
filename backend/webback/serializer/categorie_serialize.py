
from rest_framework import serializers
from webback.models import Categorie

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categorie
        fields=['numCategorie','nomCategorie','imageCategorie','descCategorie']
        