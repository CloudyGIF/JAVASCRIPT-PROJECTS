
function Concatenate(){
   var string1 = "string 1";
   var string2 = " string 2";
   var sentence = string1.concat(string2);
   document.getElementById("Result").innerHTML = sentence //functon using local  var out of scope
}

function Slice(){
    var string = "This is a string";
    var sentence = string.slice(10,17)
    document.getElementById("Result2").innerHTML = sentence //functon using local  var out of scope
 }

 function Upper(){
    var string = document.getElementById("UpperCase").value;
    var position = string.search(/smile/i);

    if(position == -1) {
        var smile = "There is no smile in the text!"
    } else {
    var position2 = position + 5;
    var smile = (string.slice(position,position2)).toUpperCase();
    }
    document.getElementById("Result3").innerHTML = smile;

 }

function NumToString(){

    var num = document.getElementById("num").value;

    if(isNaN(num)) {
        var result = "Your input is not a number."
    } else {
        var result = (Number(num)).toString();
    }
    document.getElementById("Result4").innerHTML = result;
}

function Precision(){

    var num = document.getElementById("num2").value;

    if(isNaN(num)) {
        var result = "Your input is not a number."
    } else {
        var result = (Number(num)).toPrecision(3);
    }
    document.getElementById("Result5").innerHTML = result;
}