from django.shortcuts import render
import os
from django.http import JsonResponse, FileResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.conf import settings
import urllib.parse
import re


# Ensure the folder exists 
# os.makedirs(settings.MEDIA_ROOT, exist_ok=True)

@csrf_exempt # disable csrf

def upload_resume(request):
    if request.method=='POST':
        # Checking if the file is present in the request
        if 'resume' not in request.FILES:
            return JsonResponse({'error':'No resume file provided'}, status=400)
        
        uploaded_file=request.FILES['resume']
        region=request.POST['region']
        
        
        # Save the file in the data/resumes folder
        # save_path=os.path.join(settings.MEDIA_ROOT,uploaded_file.name)
        clean_file_name = uploaded_file.name.replace(" ", "_")


        clean_file_name = re.sub(r'\s+', '_', clean_file_name)  # Replace multiple spaces with a single underscore
        clean_file_name = re.sub(r'[^a-zA-Z0-9_.-]', '', clean_file_name)  # Remove special characters except underscores and dots

        save_path=os.path.join(settings.MEDIA_ROOT,clean_file_name)
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        
        print("Resume saved at:",save_path)
        
        
        with open(save_path,'wb') as f:
            for chunk in uploaded_file.chunks():
                f.write(chunk)
        
            
            file_url=request.build_absolute_uri(settings.MEDIA_URL + clean_file_name)
            print("file URL  sent to the frontend : ",file_url)
            print("URL name: ",clean_file_name)
            
            
            return JsonResponse({'message':'Resume uploaded successfully', 'region':region, 'file_url':file_url}, status=200)
            
            # # return the saved file directly in response
            # return FileResponse(open(save_path, 'rb'), content_type='application/pdf')
    
    return JsonResponse({"error":"Invalid request method"},status=405)   
    