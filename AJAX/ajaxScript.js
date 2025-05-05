function getMsg() {
    //STEp 1 - Setup the XML HTTP request object
    let ajaxRequest = new XMLHttpRequest();

      //get input value for the name

      let inputVal = document.getElementById("fullName").value;

     //function to display user input value once request has been received

     ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }
    //STEP 2 Prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3 Defines the AJAX reponse callback method that establishes if the response
    // was successfull and where to respond
    ajaxRequest.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    //STEP 4 Send the request 
    ajaxRequest.send();
}