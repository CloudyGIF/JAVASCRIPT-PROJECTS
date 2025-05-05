function getFact(){
    let ajaxRequest = new XMLHttpRequest();

    //initialize request
    let msg1 = "Orcas have been observed to..."

    let msg2 = "";

    //stores first part of the msg, initializes var for second part of msg

    ajaxRequest.open('GET', 'fact.html', true);

    //gets the data fact.html

    ajaxRequest.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){

            msg2 = ajaxRequest.responseText;
        }
    }

    //sets msg2 to be text from fact.html 

    ajaxRequest.onload = function () {
        document.getElementById("msg").innerHTML = msg1 + msg2;
    }

    //updates msg

    ajaxRequest.send();
}