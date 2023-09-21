function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let firstNumber,
    secondNumber,
    operator;

function operate(operator,firstNb,secondNmb) {
    switch(operator){
        case "+":
            return add(firstNb,secondNmb);
            break;
        case "-":
            return subtract(firstNb,secondNmb);
            break;
        case "*":
            return multiply(firstNb,secondNmb);
            break;
        case "/":
            return divide(firstNb,secondNmb);
            break;   }
}