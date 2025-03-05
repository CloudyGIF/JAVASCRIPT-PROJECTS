function example_func(){
    var hello = "Hello"; //sets var hello and world
    var world = " World!";
    document.getElementById("change_text"); //get the element id

    change_text.textContent = hello + world; //changes the text value to the concatenate of the two variables
}

function concat_func(){
    var phrase = "Hello"; //sets var hello and append a string value
    phrase += " World!";
    document.getElementById("concatenate").innerHTML = phrase; //changes inner HTML of the element called
}

