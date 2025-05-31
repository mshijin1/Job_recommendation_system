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
// let count = 0;
// document.getElementById('resumeForm').addEventListener('submit', async function (event) {
//     event.preventDefault();
//     console.log("form submitted");
//     const resumeInput = document.getElementById('resume');
//     const responseText = document.getElementById('response');
//     const regionSelect = document.getElementById('region');
//     const resumePreview = document.getElementById('resumePreview');
//     const resumeEmbed = document.getElementById('resumeEmbed');
//     const loadingDiv = document.getElementById('loading');

//     // clear previous response messages
//     responseText.innerText = ' ';
//     // loadingDiv.classList.add('hidden');

//     if (!resumeInput.files.length) {
//         responseText.innerText = "Please select a file to upload.";
//         return;
//     }

//     const formData = new FormData();
//     formData.append('resume', resumeInput.files[0]);
//     formData.append('region', regionSelect.value);

//     // loadingDiv.classList.remove('hidden'); // Show loading indicator
//     const controller = new AbortController();
//     const signal = controller.signal;

//     setTimeout(() => controller.abort(), 30000); // Timeout after 30 seconds

//     try {
//         // lock the submit button to prevent resubmission
//         document.getElementById('submitBtn').disabled = true;

//         const response = await fetch('http://127.0.0.1:8000/upload_resume/', {
//             method: 'POST',
//             body: formData,
//             signal
//         });

//         console.log("form sent to backend");

//         // Waiting for the response to fully arrive
//         const result = await response.json();
//         localStorage.setItem("resume", result.file_url);
//         loadingDiv.classList.add('hidden'); // Hide loading indicator

//         if (response.ok) {
//             alert("response received from backend", result.file_url);
//             responseText.innerText = "File uploaded successfully: " + result.file_url;
//             alert(result.file_url);

//             // Call test function here
//             test();
//         } else {
//             console.log("response received from backend", result.error);
//             responseText.innerText = "Upload failed: " + result.error;
//         }
//     } catch (error) {
//         loadingDiv.classList.add('hidden');
//         console.error("Error connecting to server:", error);
//         responseText.innerText = "Error: Unable to connect to the server.";
//     } finally {
//         // re-enable the submit button after completion
//         document.getElementById('submitBtn').disabled = false;
//     }
// });

// function test() {
//     const resume = localStorage.getItem("resume");
//     count++;
//     const resumeEmbed = document.getElementById('resumeEmbed');
//     if (resume) {
//         console.log(resume);
//         resumeEmbed.src = resume;
//         console.log(`function has run ${count}`);

//         const responseText = document.getElementById('response');
//         responseText.innerText="File uplaoaded"+resume+count;
//     }
//     // localStorage.removeItem("resume");
// }
// test();


// function processCategory(){
//     const resumeInput = document.getElementById('resume');
//     const category=document.getElementById('Category')
//     const resume=resumeInput.files[0];

//     try{
//         // fetching the job category from find_Category 
//         const type=fetch('http://127.0.0.1:8000/find_Category/',{
//             method:'POST',
//             body: resume
//         });
//         console.log("sent to ask for category");


//         const result=type.json();
//         category.innerText=result.category;
//         console.log("Result recieved from 'Find_Category' Function")
//     }
//     catch{
//         console.error("Error couldnt find category: ", error);   
//         category.innerText="Unable to find category";
//     }
// }
// processCategory();


let count=0;
// localStorage.setItem('resume',`http://127.0.0.1:8000/media/software_engineer_Velocity.pdf`)
document.getElementById('resumeForm').addEventListener('submit', async function (event){
    event.preventDefault();
    console.log("Form submitted");

    // Getting required elements
    const resumeInput=document.getElementById('resume');
    const responseText=document.getElementById('response');
    const regionSelect=document.getElementById('region');
    const loadingDiv=document.getElementById('loading');

    // clear Previous messages
    responseText.innerText='';

    if(!resumeInput.files.length)
    {
        responseText.innerText="Please select a file to upload";
        return;
    }

    //Prepare form data
    const formData=new FormData();
    formData.append('resume',resumeInput.files[0]);
    formData.append('region',regionSelect.value);

    // configure fetch timeout
    // const controller=new AbortController();
    // const signal=controller.signal;
    // setTimeout(()=> controller.abort(),30000000000000);//

    try
    {
        // Disable submit button to prevent multiple submissions
        document.getElementById('submitBtn').disabled=true;

        const response=await fetch('http://127.0.0.1:8000/upload_resume/',{
            method:'POST',   
            body: formData,
            // signal
        });

        console.log("Form sent to backend");

        // Waiting for the response to fully arrive
        const result= await response.json();
        localStorage.setItem("resume",result.file_url);
        loadingDiv.classList.add('hidden'); // hidding pthe loading indicator
        
        if(response.ok)
        {
            responseText.innerText="File uploaded successfully: "+result.file_url;
            test(result.file_url);
        }
        else
        {
            console.log("response received from backend", result.error);
            responseText.innerText="Upload failed: "+result.error;
        }
    }
    catch(error)
    {
        loadingDiv.classList.add('hidden');
        console.error("Error connecting to server: ",error);
        responseText.innerText="Error: Unable to connect to server.";
    }
    finally
    {
        // Re-enable the submit button after completion
        document.getElementById('submitBtn').disabled=false;
    }
});

function test(fileURL)
{
    count++;
    const resumeEmbed=document.getElementById('resumeEmbed');
    const responseText=document.getElementById('response');
    const content=localStorage.getItem('resume');

    if(content)
    {
        console.log(content);
        resumeEmbed.src=content; // show file in an embed

        console.log(`function has run ${count}`);
        responseText.innerText="File uploaded: "+ content+ "(Run count: "+")";
        processCategory();
    }
}
test()

async function processCategory()
{
    const resumeURL=localStorage.getItem('resume');
    console.log("find the category of: ",resumeURL)
    const category=document.getElementById('category');

    if(!resumeURL)
    {
        console.error("No file URL found");
        category.innerText="Please upload a resume first";
        return;
    }
    try
    {
        // step 1: Fetch the actual file from the stored URL
        const response=await fetch(resumeURL);
        if(!response.ok) throw new Error("Failed to fetch file from URL");

        // Step 2: Convert response to a blob
        const blob=await response.blob();
        const file=new File([blob],"resume.pdf",{type: blob.type});

        // Step 3: Send the file to the backend
        const formData=new FormData();
        formData.append('resume',file); // sending the actual file not the url


        // Fetching the job category from find_category
        const apiResponse=await fetch('http://127.0.0.1:8000/find_Category/find_Type/',{
            method: 'POST',
            body: formData // Send the file using FormData
        });

        if(apiResponse.ok)
        {
            const result=await apiResponse.json();
            category.innerText="Category: "+result.category; // Display category
            console.log("Result recieved from find category function: ",result.category);
            scrapping(result.category);
        }
        else
        {
            const errorResult=await apiResponse.json();
            category.innerText="Failed to retrieve category.";
            console.error("Error: ",errorResult);
        }
    }
    catch(error)
    {
        console.error("Error couldn't find category: ", error);
        category.innerText="Unable to find category:";
    }
}

async function scrapping(category)
{
    // const category=document.getElementById('category').innerText;
    const recommendations=document.getElementById("recommendations");
    recommendations.innerText=category;
    const region=document.getElementById('region').value;


    const formData=new FormData();
    formData.append('category',category);
    formData.append('region',region)

    try{
        // fetch the jobs scrapped from the internet
        const apiResponse=await fetch('http://127.0.0.1:8000/scrap/',{
            method: 'POST',
            body: formData
        });

        if(apiResponse.ok)
        {
            const result=await apiResponse.json();

            if (result.length>0){
                recommendations.innerHTML="<strong>Recommendation:</strong>";

                result.forEach(job => {
                    // 
                    
                    recommendations.innerHTML += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${job.Title}</h5>
                            <p class="card-text"><strong>Company:</strong> ${job.Company}</p>
                            <p class="card-text"><strong>Location:</strong> ${job.Location}</p>
                            <a href="${job.Link}" target="_blank" class="btn btn-primary">Apply Now</a>
                        </div>
                    </div>
                `;


                });
            }else{
                recommendations.innerText=" No jobs found for this category.";
            }

            console.log("Result received from scrapper function successfully:", result);

        }else{
            const errorResult=await apiResponse.json();
            recommendations.innerText="failed to retrive jobs";
            console.error("Error: ",errorResult);   
        }
    }
    catch(error)
    {
        console.error("Error coudn't find scrap function",error);
        recommendations.innerText="Unable to scrape jobs from the internet";
    }  
    
}
