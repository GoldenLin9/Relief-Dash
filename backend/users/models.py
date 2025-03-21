from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CustomUserManager

class CustomUser(AbstractUser):
    
    
    email = models.EmailField(unique=True)
    
    # If you want to make email required at the model level
    REQUIRED_FIELDS = ['email']  # Used by the createsuperuser command
    
    objects = CustomUserManager()