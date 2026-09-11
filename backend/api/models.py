from django.db import models

class Inquiry(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    industry = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_processed = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Inquiries"
        ordering = ['-created_at']

    def __str__(self):
        return f"Inquiry from {self.name} ({self.email})"

class Service(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    icon = models.CharField(max_length=50, help_text="Material Symbol icon name")
    image_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Machine(models.Model):
    name = models.CharField(max_length=200)
    machine_type = models.CharField(max_length=100)
    capacity = models.CharField(max_length=200)
    precision = models.CharField(max_length=100)
    image_url = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    industry = models.CharField(max_length=100)
    material = models.CharField(max_length=100)
    image_url = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Testimonial(models.Model):
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    company = models.CharField(max_length=150)
    content = models.TextField()
    rating = models.IntegerField(default=5)

    def __str__(self):
        return f"{self.name} - {self.company}"
