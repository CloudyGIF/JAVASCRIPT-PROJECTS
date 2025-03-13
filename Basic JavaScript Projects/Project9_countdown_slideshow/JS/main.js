
function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

 tick();
}

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n){
    let i; //initiates index variable
    let slides =  document.getElementsByClassName("Slide"); //gets slides array
    let dots = document.getElementsByClassName("dot"); //gets dots array
    if(n > slides.length){
        slideIndex = 1
    } //wrap-around effect that sets index as 1 n is higher than the number of slides
    if(n < 1) {
        slideIndex = slides.length
    } 
    for (i = 0; i < slides.length; i++) { //it's a forloop that sets all Slide class as invisible (display: none)
        slides[i].style.display = "none"; 
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].ClassName = dots[i].className.replace(" active", ""); //it's a forloop for i while i is less than dots array index length with increment by 1 and makes all dots not active class

    }
    slides[slideIndex - 1].style.display = "block"; //set index 0 as visible
    dots[slideIndex-1].className += " active"; //sets index dot 0 as active
}

function plusSlides(n) {
    showSlides(slideIndex += n); //increases slideIndex by n and runs the showSlides func
}

function currentSlide(n){
    showSlides(slideIndex = n);
}