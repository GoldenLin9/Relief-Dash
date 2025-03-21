
from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        print("Creating user with username:", username)
        if not email:
            raise ValueError("Users must have an email address")
        
        # maybe make sms or email verification to activate user in future
        extra_fields.setdefault('is_active', True)
        user = self.model(
            username=username,
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        
        return user