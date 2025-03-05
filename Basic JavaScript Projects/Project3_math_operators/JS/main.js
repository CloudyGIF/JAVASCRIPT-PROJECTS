function math_add(){
    var math = 3 + 4;
    document.getElementById("math").innerHTML = math;
}

function math_substract(){
    var math = 4 - 3;
    document.getElementById("math-substract").innerHTML = math;
}

function math_mult(){
    var math = 4 * 3;
    document.getElementById("math_mult").innerHTML = math;
}

function math_div(){
    var math = 4 / 3;
    document.getElementById("math_div").innerHTML = math;
}

function math_complex(){
    var math = (4 / 30)/2;
    document.getElementById("math_complex").innerHTML = math;
}

function math_modulus(){
    var math = 4 % 3;
    document.getElementById("math_modulus").innerHTML = math;
}

function math_negative(){
    var math = 4;
    document.getElementById("math_negative").innerHTML = - math;
}

function math_inc(){
    var math = 4;
    document.getElementById("math_inc").innerHTML = "Increment :" + math++ + ", Decrement: " + math--;
}

function math_random(){
    document.getElementById("math_random").innerHTML =  Math.random() * 100;
}

function math_Pi(){
    document.getElementById("math_Pi").innerHTML =  Math.PI;
}