from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200, default="Qemal Stafa") # Updated location
    date = models.DateTimeField()
    image = models.ImageField(upload_to='events/', blank=True, null=True)
    registration_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Application(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    school = models.CharField(max_length=255)
    grade = models.CharField(max_length=50)
    motivation = models.TextField()
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.school}"