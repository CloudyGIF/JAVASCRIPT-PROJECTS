function getReceipt(){

    //initiates the final message
    var text1 = "<h3>You Ordered:</3><br>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i= 0; i< sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza"){
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
 //calculates the pizza side of the price based on the selected checkbox
    runningTotal = sizeTotal;
    console.log(selectedSize+" =$"+sizeTotal+" .00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+" .00");
    getTopping(runningTotal,text1);

    console.log(runningTotal);
};

function getTopping(runningTotal, text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j=0; j< toppingArray.length;j++){
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
 //get number of selected toppings
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1){
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    //add pizza total with toppings total (1 topping is free?)

    runningTotal = (runningTotal + toppingTotal); //writes the final message
    console.log("total selected topping items: "+ toppingCount);
    console.log(toppingCount+" topping - 1 free topping = $"+toppingTotal+" .00");
    console.log("topping text1: "+ text1);
    console.log("Purchase Total: $"+runningTotal+" .00");
    console.log("Purchase Total: $"+runningTotal+" .00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+" .00"+"</strong></h3>";
};