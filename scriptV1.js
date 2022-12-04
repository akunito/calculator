const calc = (a, b, operator) => {
    //instead of using eval, use this:
    //it execute the operation according the operator received by parameter
    return (Function("a", "b", `return a ${operator} b`)(a,b) )
}


const calcButtons = document.querySelectorAll('.calc');
const calcNumbers = document.querySelectorAll('.number');
const calcOperators = document.querySelectorAll('.operator');
const calcEqual = document.querySelectorAll('.equal');
const calcComa = document.querySelectorAll('.coma');
const calcClear = document.querySelectorAll('.clear');
const history = document.querySelector('#history');
const display = document.querySelector('#display');

let value1 = null;
let operator = null;
let value2 = null;
let coma = false;

calcNumbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (coma === false || button.id != "."){
            if (operator != null){          //if there is OPERATOR --> value2
                if (value2 != null){
                    value2 += button.id;
                    display.value = value2
                } else {
                    value2 = button.id;
                    display.value = value2
                }
                
            } else {                      //if there is NOT OPERATOR --> value1
                if (value1 != null){
                    value1 += button.id;
                    display.value = value1
                } else {
                    value1 = button.id;
                    display.value = value1
                }
            }
    
            if (button.id === "." ) {
                coma = true;
            }
            history.value += button.id;
            console.log(value1);

        } else {
            console.log("double coma not possible")
        }

    });
});

calcOperators.forEach((button) => {
    button.addEventListener('click', () => {
        history.value += button.id;
        //operating
        operator = button.id
        display.value = operator
        //clearing
        coma = false;
        //console
        console.log(operator);
    });
});


calcEqual.forEach((button) => {
    button.addEventListener('click', () => {
        history.value += button.id;
        //operating
        const result = calc(value1, value2, operator);
        display.value = result;
        history.value += result;
        //clearing
        value1 = result;
        operator = null;
        value2 = null;
        history.value += " | " + result;
        
        //check if results has coma
        if (result == Math.floor(result)){ //floor remove decimals, rounding the number
            coma = false; //if equal means that number has no decimals or coma
        } else {
            coma = true;
        }
        
        //console
        console.log(result);
    });
});

calcClear.forEach((button) => {
    button.addEventListener('click', () => {
        history.value = "";
        display.value = "";

        //clearing
        value1 = null;
        operator = null;
        value2 = null;
        coma = false;
        //console
        console.log(button.id);
    });
});
