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

let valueCurrent = null;
let values = [];
let counter = 0;
let coma = false;

calcNumbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (coma === false || button.id != "."){
            if (valueCurrent != null){
                valueCurrent += button.id;
                display.value = valueCurrent
            } else {
                valueCurrent = button.id;
                display.value = valueCurrent
            }
            if (button.id === "." ) {
                coma = true;
            }
            history.value += button.id;
        } else {
            console.log("double coma not possible")
        }
    });
});

calcOperators.forEach((button) => {
    button.addEventListener('click', () => {
        if (valueCurrent != null) {
            history.value += ' ' + button.id + ' ';
            //operating
            display.value = button.id
            values[counter] = valueCurrent;
            values[counter+1] = button.id;
            counter += 2;
            //clearing
            valueCurrent = null;
        } else {
            console.log(history.value);

            let historyAux = history.value;
            historyAux = historyAux.substring(0,history.length-3);
            history.value = historyAux + ' ' + button.id + ' ';

            console.log(history.value);
            //operating
            display.value = button.id
            values[counter-2] = valueCurrent;
            values[counter-1] = button.id;
        }
        //clearing
        coma = false;
        //console
        console.log(values);
        console.log(counter);
    });
});



calcClear.forEach((button) => {
    button.addEventListener('click', () => {
        history.value = "";
        display.value = "";
        //clearing
        valueCurrent = null;
        values = [];
        operatorCurrent = null;
        operators = [];
        counter = 0;
        coma = false;
        //console
        console.log(button.id);
    });
});
