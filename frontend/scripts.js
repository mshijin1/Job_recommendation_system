// document.getElementById('resumeForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const formData = new FormData();
//     const fileInput = document.getElementById('resume');
//     const regionSelect = document.getElementById('region');
//     const resumePreview = document.getElementById('resumePreview');
//     const resumeIframe = document.getElementById('resumeIframe');

//     if (!fileInput.files.length) {
//         alert('Please upload a resume.');
//         return;
//     }

//     formData.append('resume', fileInput.files[0]);
//     formData.append('region', regionSelect.value); // Send region if needed later


//     const fileUrl = URL.createObjectURL(fileInput.files[0]);
//     resumeIframe.src= fileUrl;
//     // resumePreview.classList.remove('hidden');

//     // Show loading message
//     const loadingDiv = document.getElementById('loading');
//     const recommendationsDiv = document.getElementById('recommendations');
//     loadingDiv.classList.remove('hidden');;
//     recommendationsDiv.innerHTML = '';

//     try{
//         // Send resume to server
//         const response = await fetch('http://127.0.0.1:5000/upload', {
//             method: 'POST',
//             body: formData,
//         });

//         const result = await response.json();
//         loadingDiv.classList.add('hidden');

//         if (response.ok) {
//             recommendationsDiv.innerHTML = `<p>${result.message}</p>`;
//         } else {
//             recommendationsDiv.innerHTML = `<p>Error: ${result.error}</p>`;
//         }
//     } catch (error) {
//         loadingDiv.classList.add('hidden');
//         recommendationsDiv.innerHTML = `<p>Error: Unable to connect to the server.</p>`;
//     }
// });










// document.getElementById('resumeForm').addEventListener('submit', async function (e) {
//     e.preventDefault(); // Prevent page reload.

//     const fileInput = document.getElementById('resume');
//     const regionSelect = document.getElementById('region');
//     const resumePreview = document.getElementById('resumePreview');
//     const resumeIframe = document.getElementById('resumeIframe');
//     const formData = new FormData();

//     if (!fileInput.files.length) {
//         alert('Please upload a resume.');
//         return;
//     }

//     // Preserve the uploaded resume in the preview
//     const file = fileInput.files[0];
//     const fileURL = URL.createObjectURL(file);
//     resumeIframe.src = fileURL; // Set the iframe to show the uploaded file.
//     resumePreview.classList.remove('hidden'); // Ensure the preview section is visible.

//     // Add file and region to FormData
//     formData.append('resume', file);
//     formData.append('region', regionSelect.value);

//     // Show loading indicator
//     const loadingDiv = document.getElementById('loading');
//     const recommendationsDiv = document.getElementById('recommendations');
//     loadingDiv.classList.remove('hidden');
//     recommendationsDiv.innerHTML = ''; // Clear previous messages.

//     try {
//         // Send data to the server
//         const response = await fetch('http://127.0.0.1:5000/upload', {
//             method: 'POST',
//             body: formData,
//         });

//         const result = await response.json();
//         loadingDiv.classList.add('hidden'); // Hide loading indicator.

//         if (response.ok) {
//             recommendationsDiv.innerHTML = `<p>${result.message}</p>`;
//         } else {
//             recommendationsDiv.innerHTML = `<p>Error: ${result.error}</p>`;
//         }
//     } catch (error) {
//         loadingDiv.classList.add('hidden');
//         recommendationsDiv.innerHTML = `<p>Error: Unable to connect to the server.</p>`;
//     }
// });







// 






// document.getElementById('resumeForm').addEventListener('submit', async function (e) {
//     e.preventDefault(); // Prevent page reload.

//     const fileInput = document.getElementById('resume');
//     const regionSelect = document.getElementById('region');
//     const resumePreview = document.getElementById('resumePreview');
//     const resumeIframe = document.getElementById('resumeIframe');
//     const loadingDiv = document.getElementById('loading');
//     const recommendationsDiv = document.getElementById('recommendations');
//     const formData = new FormData();

//     // Clear previous state
//     recommendationsDiv.innerHTML = '';
//     loadingDiv.classList.add('hidden');

//     if (!fileInput.files.length) {
//         alert('Please upload a resume.');
//         return;
//     }

//     const file = fileInput.files[0];
//     const validTypes = [
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//     ];

//     // Validate file type
//     if (!validTypes.includes(file.type)) {
//         alert("Please upload a valid PDF or Word document.");
//         return;
//     }

//     // Validate file size (5MB limit)
//     if (file.size > 5 * 1024 * 1024) {
//         alert("File size must be less than 5MB.");
//         return;
//     }

//     // Generate blob URL for the uploaded file
//     const fileURL = URL.createObjectURL(file);
//     resumeIframe.src = fileURL; // Set the iframe to display the uploaded resume.
//     resumePreview.classList.remove('hidden'); // Show the preview section.

//     // Add file and region to FormData
//     formData.append('resume', file);
//     formData.append('region', regionSelect.value);

//     // Show loading indicator
//     loadingDiv.classList.remove('hidden');

//     try {
//         // Send data to the server
//         const response = await fetch('http://127.0.0.1:5000/upload', {
//             method: 'POST',
//             body: formData,
//         });

//         const result = await response.json();
//         loadingDiv.classList.add('hidden'); // Hide loading indicator.

//         if (response.ok) {
//             recommendationsDiv.innerHTML = `<p><span class="success-icon">✔</span> ${result.message}</p>`;

//             // Use the file URL from the server response
//             resumeIframe.src = 'http://127.0.0.1:5000${result.file_url}';
//             resumePreview.classList.remove('hidden'); // Show resume preview.
//         } else {
//             recommendationsDiv.innerHTML = `<p><span class="error-icon">✘</span> Error: ${result.error}</p>`;
//         }
//     } catch (error) {
//         loadingDiv.classList.add('hidden');
//         recommendationsDiv.innerHTML = `<p><span class="error-icon">✘</span> Error: Unable to connect to the server.</p>`;
//     }

//     // Revoke the blob URL after submission to free resources
//     window.addEventListener('beforeunload', () => {
//         URL.revokeObjectURL(fileURL);
//     });
// });


// e.preventDefault(); // Prevent page reload.
document.getElementById('resumeForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    console.log("form submitted")
    const resumeInput = document.getElementById('resume');
    const responseText = document.getElementById('response');
    const regionSelect = document.getElementById('region');
    const resumePreview = document.getElementById('resumePreview');
    const resumeEmbed = document.getElementById('resumeEmbed');
    const loadingDiv = document.getElementById('loading');

    // clear previous response messages
    responseText.innerText = ' ';
    loadingDiv.classList.add('hidden');
    
    if (!resumeInput.files.length) {
        responseText.innerText = "Please select a file to upload.";
        return;
    }

    const formData = new FormData();
    formData.append('resume', resumeInput.files[0]);
    formData.append('region', regionSelect.value);

    loadingDiv.classList.remove('hidden'); // Show loading indicator


    try {
        // lock the submit button to prevent resubmittion
        document.getElementById('submitBtn').disabled=true;

        const response = await fetch('http://127.0.0.1:8000/upload_resume/', {
            method: 'POST',
            body: formData
        });

        console.log("form sent to backend")

        // Waiting for the response to fully arrive
        const result = await response.json();
        loadingDiv.classList.add('hidden'); // Hide loading indicator

        if (response.ok) {
            alert("response recieved from backend", result.file_url)
            responseText.innerText = "File uploaded successfully: " + result.file_url;
            alert(result.file_url)


            setTimeout(() => {
           // Display the uploaded resume in the iframe
        //    resumeEmbed.src=result.file_url.replace(/\s/g,'_');
              resumeEmbed.src=result.file_url;
            resumePreview.classList.remove('hidden');   
            }, 50); 
        } else {
            console.log("response recieved from backend", result.error)
            responseText.innerText = "Upload failed: " + result.error;
        }
    } catch (error) {
        loadingDiv.classList.add('hidden');
        console.error("Error connecting to server:",error);
        responseText.innerText = "Error: Unable to connect to the server.";
    }finally{
        // re-enable the submit button after completion
        document.getElementById('submitBtn').disabled=false;
    }
});