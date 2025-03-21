from django.urls import path, re_path, include
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.jwt')),
    path('logout/', TokenBlacklistView.as_view(), name='token_blacklist'),
]