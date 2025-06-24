from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Produit
from ..serializer.produit_serialize import ProduitSerializer

class ViewsProduit(APIView):
    def get(self, request):
        produits = Produit.objects.all()
        serializer = ProduitSerializer(produits, many=True)
        return Response(serializer.data)

    def post(self, request):
        createserializer = ProduitSerializer(data=request.data)
        if createserializer.is_valid():
            produit = createserializer.save()
            produit.gererQrCode()
            return Response(ProduitSerializer(produit).data, status=status.HTTP_201_CREATED)
        return Response(createserializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            instance = Produit.objects.get(pk=pk)
            instance.delete()
            return Response({"message": "Suppression réussie"}, status=status.HTTP_200_OK)
        except Produit.DoesNotExist:
            return Response({'erreur': 'Aucune donnée trouvée'}, status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            instance = Produit.objects.get(pk=pk)
        except Produit.DoesNotExist:
            return Response({"erreur": "Aucune donnée à modifier"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ProduitSerializer(instance, data=request.data)
        if serializer.is_valid():
            produit = serializer.save()
            produit.gererQrCode()

            return Response(ProduitSerializer(produit).data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
