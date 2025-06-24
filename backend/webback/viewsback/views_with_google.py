from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from google.auth.transport import requests
from ..models import Utilisateur
from ..serializer.user_serializer import UserSerializer

GOOGLE_CLIENT_ID = '407408718192.apps.googleusercontent.com'  # à adapter si besoin

class GoogleAuthView(APIView):
    def post(self, request):
        token = request.data.get('id_token')
        if not token:
            return Response({'error': 'id_token manquant'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)

            if idinfo['aud'] != GOOGLE_CLIENT_ID:
                return Response({'error': 'Audience non valide'}, status=status.HTTP_400_BAD_REQUEST)

            email = idinfo.get('email')
            google_id = idinfo.get('sub')  # identifiant Google unique
            name = idinfo.get('name') or email.split('@')[0]

            if not email or not google_id:
                return Response({'error': 'Email ou Google ID manquant'}, status=status.HTTP_400_BAD_REQUEST)

            # Chercher l'utilisateur par google_id
            try:
                utilisateur = Utilisateur.objects.get(google_id=google_id)
                created = False
            except Utilisateur.DoesNotExist:
                # Créer un nouvel utilisateur avec google_id
                utilisateur = Utilisateur.objects.create(
                    email=email,
                    google_id=google_id,
                    username=email.split('@')[0]
                )
                utilisateur.set_unusable_password()
                utilisateur.save()
                created = True

            serializer = UserSerializer(utilisateur)
            return Response({
                'created': created,
                'user': serializer.data
            }, status=status.HTTP_200_OK)

        except ValueError as e:
            return Response({'error': 'Token invalide', 'details': str(e)}, status=status.HTTP_400_BAD_REQUEST)
