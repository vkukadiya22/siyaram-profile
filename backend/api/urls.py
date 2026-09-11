from django.urls import path
from .views import (
    InquiryCreateView, ServiceListView, MachineListView, 
    ProjectListView, TestimonialListView
)

urlpatterns = [
    path('inquiry/', InquiryCreateView.as_view(), name='inquiry-create'),
    path('services/', ServiceListView.as_view(), name='service-list'),
    path('machines/', MachineListView.as_view(), name='machine-list'),
    path('projects/', ProjectListView.as_view(), name='project-list'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial-list'),
]
