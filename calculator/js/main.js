const calculator = {
    display_value: '0',
    first_operand: null,
    wait_second_operand: false,
    operator: null,
};

//creates calculator object class with display value, first operand, state for waiting and operator

//modifies the value each time a button is clicked 

function Input_Digit(digit){
    const{display_value,wait_second_operand} = calculator;
    if(wait_second_operand === true){ //checks if wait for second operant is true
        calculator.display_value = digit;
        calculator.wait_second_operand = false;
    } else {
        //overwrites the current display value if it is 0
        calculator.display_value = display_value === '0' ? digit: display_value + digit;
    }
}


//decimal points handler
function Input_Decimal(dot){
    if(calculator.wait_second_operand === true) return;
    if(!calculator.display_value.includes(dot)){
        calculator.display_value += dot; //doesn't add decimal dot if it is already present
    }
}

function Handle_Operator(Next_Operator){
    const {first_operand,display_value,operator} = calculator;

    const Value_of_Input = parseFloat(display_value);

    //Handles operators, converts the current display number and checks if an operator allready exists
    if(operator && calculator.wait_second_operand){
        calculator.operator = Next_Operator;
        return;
    }
//looks up the related operator to perform the calculation. 
    if(first_operand == null){
        calculator.first_operand = Value_of_Input;
    } else if(operator) {
        const Value_Now = first_operand || 0;
        let result = perform_calculation[operator](Value_Now,Value_of_Input);
        result = Number(result).toFixed(9);
        result = (result *1).toString();
        calculator.display_value = parseFloat(result);
        calculator.first_operand = parseFloat (result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = Next_Operator;
        
}

const perform_calculation = {
    '/' : (First, Second) => First / Second,
    '*' : (First, Second) => First * Second,
    '+' : (First, Second) => First + Second,
    '-' : (First, Second) => First - Second,
    '=' : (First, Second) => Second
}

//resets the calculator object

function calculator_reset(){
    calculator.display_value = '0';
    calculator.first_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}

function update_display(){
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display_value;
}

update_display();

//button clicks events
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const {target} = event;

    //if the element clicked on is not class button the function stops
    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        update_display();
        return;
    }
    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        update_display();
        return;
    }
    if(target.classList.contains('all-clear')){
        calculator_reset();
        update_display();
        return;
    }
    Input_Digit(target.value);
    update_display;
})