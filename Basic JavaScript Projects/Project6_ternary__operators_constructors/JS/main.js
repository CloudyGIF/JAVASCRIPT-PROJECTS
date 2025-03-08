function Vote_Func(){
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Result").innerHTML = can_vote;

} //function utlizing ternary variable

class PC {
    constructor(Manufacturer, OS, age) {
        this.PC_Manufacturer = Manufacturer;
        this.PC_OS = OS;
        this.PC_age = age;
    }
} //PC class constructor


function CreatePC(){
    var Manufacturer, OS, age;
    Manufacturer = document.getElementById("Manufacturer").value;
    OS = document.getElementById("OS").value;
    age = document.getElementById("PC_age").value;
    var NewPC = new PC(Manufacturer,OS,age);
    document.getElementById("New_and_This").innerHTML = "PC registered: "+  NewPC.PC_Manufacturer + " " + NewPC.PC_OS +  " " + NewPC.PC_age + " years old";

} //function that creates a new PC class instance based on inputs


function Calc_Year(age){
    var current_year = new Date().getFullYear();
    var birth_year = current_year - age;
    return birth_year; //function that calculates the year of birth based on the current year.
}
function Nested_Func(){
    var age = document.getElementById("Age").value;
    var year = Calc_Year(age);
    document.getElementById("YearResult").innerHTML = year;

} //returns the year of birth based on the input