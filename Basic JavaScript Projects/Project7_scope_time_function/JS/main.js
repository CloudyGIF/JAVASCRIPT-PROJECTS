
var global = 10; //global var
function local_var(){
    var local = 1;
    return global + 5 //functon using global var
}
function fail(){
   var result = global + local;
   document.getElementById("ResultFail").innerHTML = "Nothing" //functon using local  var out of scope
}

console.log(global);


console.log(local); //will result in error as local variable is local to local_var function



function Open_Hours(){
    if (new Date().getHours() > 9 && new Date().getHours() < 17) {
        document.getElementById("Result").innerHTML = "We are Open!";
    } else {
        document.getElementById("Result").innerHTML = "We are Closed!"
    }
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon!"
    }
    else {
        Reply = "It is evening!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}