from django.urls import path
from ..viewsback.user_views import UserViews
from ..viewsback.client_views import ViewsClient
from ..viewsback.views_with_google import GoogleAuthView
from ..viewsback.classement_views import ViewsClassement
from ..viewsback.views_categorie import ViewsCategorie
from ..viewsback.commande_views import ViewsCommande
from ..viewsback.produit_views import ViewsProduit
from ..viewsback.image_views import ViewsImage
from ..viewsback.comprendre_views import ViewsComprendre
from ..viewsback.ville_views import ViewsVille
from ..viewsback.livraison_views import ViewsLivraison

urlpatterns = [
    path('login/',UserViews.as_view(),name='user-login'),
    path('login/<int:pk>/',UserViews.as_view(),name='user-login-delete'),
    path('auth/google/', GoogleAuthView.as_view(), name='google-login'),
    path('client/',ViewsClient.as_view(),name='client-create-get'),
    path('client/<int:pk>/',ViewsClient.as_view(),name='client-update-delete'),
    path('classement/',ViewsClassement.as_view(),name='classement-create-get'),
    path('classement/<int:pk>/',ViewsClassement.as_view(),name='classement-update-delete'),
    path('categorie/',ViewsCategorie.as_view(),name='categorie-create-get'),
    path('categorie/<int:pk>/',ViewsCategorie.as_view(),name='categorie-update-delete'),
    path('commande/',ViewsCommande.as_view(),name='commande-create-get'),
    path('commande/<int:pk>/',ViewsCommande.as_view(),name='commande-update-delete'),
    path('produit/',ViewsProduit.as_view(),name='produit-create-get'),
    path('produit/<int:pk>/',ViewsProduit.as_view(),name='produit-update-delete'),
    path('image/',ViewsImage.as_view(),name='image-create-get'),
    path('image/<int:pk>/',ViewsImage.as_view(),name='image-update-delete'),
    path('comprendre/',ViewsComprendre.as_view(),name='comprendre-create-get'),
    path('comprendre/<int:pk>/',ViewsComprendre.as_view(),name='comprendre-update-delete'),
    path('ville/',ViewsVille.as_view(),name='ville-create-get'),
    path('ville/<int:pk>/',ViewsVille.as_view(),name='ville-update-delete'),
    path('livraison/',ViewsLivraison.as_view(),name='livraison-create-get'),
    path('livraison/<int:pk>/',ViewsLivraison.as_view(),name='livraison-update-delete'),
]

