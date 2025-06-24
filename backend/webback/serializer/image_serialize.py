

from rest_framework import serializers
from webback.models import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=['numImage','numProduit','nomImage']
        