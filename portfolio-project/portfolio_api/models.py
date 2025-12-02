from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies_used = models.CharField(max_length=200)
    link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/')
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title



