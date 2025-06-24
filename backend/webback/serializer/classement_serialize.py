
from rest_framework import serializers
from webback.models import Classement

class ClassementSerializer(serializers.ModelSerializer):
    class Meta:
        model=Classement
        fields=['numClassement','nomClassement','quantiteMin','quantiteMax','descClassement']
        
        