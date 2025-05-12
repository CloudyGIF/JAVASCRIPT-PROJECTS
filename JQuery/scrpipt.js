$ (document).ready(function(){

    //the shineLoop function uses the chaining technique to 
    //utilize multiple animate events method in the same function
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };
//setInterval will repeat the shineloop function 
    setInterval(shineLoop, 0);

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        //Triggers the images to slide down one after the other
        //when the user's mouse enters the div area
        mouseenter: function(){
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //Triggers the images to slide up one after the other
        //when the user mouse leaves the div
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });


    //changes the color of the text when the user clicks on the question to red
    //and changes it to black if clicked again

    $('.question').on("click",function(){

        if($(this).css("color") === "rgb(255, 0, 0)"){

        
            $(this).css('color','black');
        } else {
            $(this).css('color','red');
        }
        }
    );


    //shows anwsers 
    $('div.question').on('click', function(){
        $(this).next().slideToggle('slow');
    });
})