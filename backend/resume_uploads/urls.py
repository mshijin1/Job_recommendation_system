from django.urls import path
from . import views
from .views import upload_resume
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.upload_resume,name='upload_resume'),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
    print("resume_uploads/urls.py  urlpatterns is :   ", urlpatterns)
    print("\n")