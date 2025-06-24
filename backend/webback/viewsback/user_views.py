
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import status
from ..models import Utilisateur
from ..serializer.user_serializer import UserSerializer

class UserViews(APIView):
    def post(self, request):
        email = request.data.get('email')

        # Vérifie si un utilisateur avec cet email existe
        try:
            utilisateur = Utilisateur.objects.get(email=email)
            if not utilisateur.has_usable_password():
                return Response({
                    'error': 'Ce compte a été créé avec Google. Veuillez vous connecter via Google.'
                }, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({
                    'error': 'Cet email est déjà utilisé.'
                }, status=status.HTTP_400_BAD_REQUEST)

        except Utilisateur.DoesNotExist:
            # Aucun utilisateur existant avec cet email → on peut créer le compte
            createserializer = UserSerializer(data=request.data)
            if createserializer.is_valid():
                sauvegarder = createserializer.save()
                return Response(UserSerializer(sauvegarder).data, status=status.HTTP_201_CREATED)

            return Response(createserializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request):
        getuser=Utilisateur.objects.all()
        userserialize=UserSerializer(getuser,many=True)
        return Response(userserialize.data)
    
     
    def delete(self,request,pk):
        try:
            instance=Utilisateur.objects.get(pk=pk)
            instance.delete()
            return Response({"message":"Suppression reussie"},status=status.HTTP_200_OK)
        except Utilisateur.DoesNotExist:
            return Response({'erreur':'pas de donner trouver'},status=status.HTTP_204_NO_CONTENT)
            
      
       
    
       