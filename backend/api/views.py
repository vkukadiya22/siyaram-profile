from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Inquiry, Service, Machine, Project, Testimonial
from .serializers import (
    InquirySerializer, ServiceSerializer, MachineSerializer, 
    ProjectSerializer, TestimonialSerializer
)

class InquiryCreateView(generics.CreateAPIView):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def perform_create(self, serializer):
        inquiry = serializer.save()
        # Send Email Notification to Mukesh Kukadiya
        subject = f"New Inquiry from {inquiry.name} - Siyaram Profile"
        message = f"""
New Contact Inquiry Received from Website:

Name: {inquiry.name}
Email: {inquiry.email}
Industry: {inquiry.industry or 'General Inquiry'}

Message:
{inquiry.message}

Received at: {inquiry.created_at}
        """
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                ['siyaramprofile82@gmail.com'],
                fail_silently=True,
            )
        except Exception as e:
            print("Django email notification error:", e)

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class MachineListView(generics.ListAPIView):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
