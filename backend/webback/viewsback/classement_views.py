



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Classement
from ..serializer.classement_serialize import ClassementSerializer

class ViewsClassement(APIView):
    def get(self,request):
        classements=Classement.objects.all()
        serializer=ClassementSerializer(classements,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        createserializer=ClassementSerializer(data=request.data)
        if createserializer.is_valid():
            sauvegarder=createserializer.save()
            return Response(ClassementSerializer(sauvegarder).data,status=status.HTTP_201_CREATED)
        return Response(createserializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk):
        try:
            instance=Classement.objects.get(pk=pk)
            instance.delete()
            return Response({"message":"Suppression reussie"},status=status.HTTP_200_OK)
        except Classement.DoesNotExist:
            return Response({'erreur':'pas de donner trouver'},status=status.HTTP_204_NO_CONTENT)
            
    
    def put(self,request,pk):
        try:
            instance=Classement.objects.get(pk=pk)
        except Classement.DoesNotExist:
            return Response({"erreur":"pas de donenr a modifier"},status=status.HTTP_404_NOT_FOUND)
        
        serializer=ClassementSerializer(instance,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    