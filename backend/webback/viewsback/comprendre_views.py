



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Comprendre
from ..serializer.comprendre_serialize import ComprendreSerializer

class ViewsComprendre(APIView):
    def get(self,request):
        comprendres=Comprendre.objects.all()
        serializer=ComprendreSerializer(comprendres,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        createserializer=ComprendreSerializer(data=request.data)
        if createserializer.is_valid():
            sauvegarder=createserializer.save()
            return Response(ComprendreSerializer(sauvegarder).data,status=status.HTTP_201_CREATED)
        return Response(createserializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        try:
            instance=Comprendre.objects.get(pk=pk)
            instance.delete()
            return Response({"message":"Suppression reussie"},status=status.HTTP_200_OK)
        except Comprendre.DoesNotExist:
            return Response({'erreur':'pas de donner trouver'},status=status.HTTP_204_NO_CONTENT)
            
    
    def put(self,request,pk):
        try:
            instance=Comprendre.objects.get(pk=pk)
        except Comprendre.DoesNotExist:
            return Response({"erreur":"pas de donenr a modifier"},status=status.HTTP_404_NOT_FOUND)
        
        serializer=ComprendreSerializer(instance,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    