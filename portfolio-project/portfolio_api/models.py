# portfolio-project/portfolio_api/models.py
from django.db import models

class Application(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    school = models.CharField(max_length=255)
    grade = models.CharField(max_length=50)
    motivation = models.TextField()
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.school}"