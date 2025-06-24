



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Categorie
from ..serializer.categorie_serialize import CategorieSerializer

class ViewsCategorie(APIView):
    def get(self,request):
        categories=Categorie.objects.all()
        serializer=CategorieSerializer(categories,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        createserializer=CategorieSerializer(data=request.data)
        if createserializer.is_valid():
            sauvegarder=createserializer.save()
            return Response(CategorieSerializer(sauvegarder).data,status=status.HTTP_201_CREATED)
        return Response(createserializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        try:
            instance=Categorie.objects.get(pk=pk)
            instance.delete()
            return Response({"message":"Suppression reussie"},status=status.HTTP_200_OK)
        except Categorie.DoesNotExist:
            return Response({'erreur':'pas de donner trouver'},status=status.HTTP_204_NO_CONTENT)
            
    
    def put(self,request,pk):
        try:
            instance=Categorie.objects.get(pk=pk)
        except Categorie.DoesNotExist:
            return Response({"erreur":"pas de donenr a modifier"},status=status.HTTP_404_NOT_FOUND)
        
        serializer=CategorieSerializer(instance,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    