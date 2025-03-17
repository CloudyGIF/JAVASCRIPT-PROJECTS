
var i = 0;
function Call_Loop(){
    j = ""
    while(i < 21) {
        j += "<br>" + i;
        i++;

    }
    document.getElementById("whileloop").innerHTML = j;
}

function For_Loop(){
    var Animals =["Cat", "Dog", "Horse", "Pig"]
    var Output = "Farm Animals: " + "<br>";
    var i = 0;
    for (i;i<Animals.length;i++){
        Output += Animals[i] + "<br>"
    }
    document.getElementById("forloop").innerHTML = Output;
}
function Array_func(){
    var Animals =["Cat", "Dog", "Horse", "Pig"]
    function randomint(x,z){
        return Math.floor(Math.random() * (z - x)) + x;

    }
    var index = randomint(0, Animals.length)
    document.getElementById("array").innerHTML = "Animal of the day: " + Animals[index];
    console.log(index);
}

function const_func(){
    const Drink = {brand: "RedBull", alcohol: false, category: "Energy Drink"};
    Drink.price = "2.5$"
    document.getElementById("constant").innerHTML = "Brand:" + Drink.brand + " Alcoholic: " + Drink.alcohol + " Price: " + Drink.price;
}

function let_use(i){
    var num = i;
    {
        let num2 = 2;
        var sum = num + num2;
    };

    return sum;
}

function return_func(){
    document.getElementById("result").innerHTML = let_use(4);

}
function PC(){
let PC = {
    Processor: "Intel",
    GPU: "NVIDIA GeForce Ti 2100",
    RAM: 64,
    Age: 3,
    info : function (){
        return "Age: " + this.Age + " Processor: " + this.Processor + " GPU: " + this.GPU + " RAM: " + this.RAM
    } 
};
document.getElementById("PC").innerHTML = PC.info();
}

function First_negative_value(array){
    let result = "No negative numbers were found"; //function that returns the first negative value in an array

    for( let i = 0; i < array.length; i++){
        if( array[i] < 0) {
            result = array[i];
            break;

        }
    }
    return result; 
}

function NegativeArray(){
    document.getElementById("negative_array").innerHTML = First_negative_value([1,3,4,-2,1,10]);
}