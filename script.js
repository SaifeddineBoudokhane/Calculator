//main variables
let firstNumber=0,
    secondNumber=0,
    currentNumber=true;//this variable tells the program where to store the current integer:true=firsNumber/false=secondNumber
    currentOperator=null;
const displayValue=["0"];
//operating functions
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
    //this function stores the inputted number inside the correct variable
function storeNumber(number){
    if(currentNumber){
        firstNumber=number;
    }else{
        secondNumber=number;
    }
    currentNumber=!currentNumber;
}

//display
function populateBottomDisplay(content=""){
    const bottomDisplay = document.getElementById("bottomDisplay");
    bottomDisplay.textContent=content;
}
populateBottomDisplay("0");
function populateTopDisplay(content=""){
    const topDisplay = document.getElementById("topDisplay");
    topDisplay.textContent=content;
}
function clearDisplays(){
    firstNumber=0;
    secondNumber=0;
    currentNumber=true;
    currentOperator=null;
    displayValue.length=0;
    displayValue.push("0");
    populateBottomDisplay(displayValue.join(""));
    populateTopDisplay();
}
//link to buttons
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const equalBtn = document.getElementById("equal");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const pointBtn = document.getElementById("point");

//set buttons eventListeners
    //clear button eventListener
clearBtn.addEventListener("click",clearDisplays)
deleteBtn.addEventListener("click",()=>{
    displayValue.pop();
    populateBottomDisplay(displayValue.join(""));
})
    //number buttons eventListener
oneBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("1");
    populateBottomDisplay(displayValue.join(""));
});
twoBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("2");
    populateBottomDisplay(displayValue.join(""));
});
threeBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("3");
    populateBottomDisplay(displayValue.join(""));
});
fourBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("4");
    populateBottomDisplay(displayValue.join(""));
});
fiveBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("5");
    populateBottomDisplay(displayValue.join(""));
});
sixBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("6");
    populateBottomDisplay(displayValue.join(""));
});
sevenBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("7");
    populateBottomDisplay(displayValue.join(""));
});
eightBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("8");
    populateBottomDisplay(displayValue.join(""));
});
nineBtn.addEventListener("click",()=>{
    if(displayValue[0]=='0'){
        displayValue.pop();
    }
    displayValue.push("9");
    populateBottomDisplay(displayValue.join(""));
});
zeroBtn.addEventListener("click",()=>{
    if (displayValue.length==0||displayValue.length>1){
        displayValue.push("0");
    }
    populateBottomDisplay(displayValue.join(""));
});

//operator buttons eventListener
equalBtn.addEventListener("click",()=>{
    let string=displayValue.join("");
    let number=Number(string);
    displayValue.length=0;
    storeNumber(number);
    const lastNmb=operate(currentOperator,firstNumber,secondNumber);
    currentNumber ? 
                    populateTopDisplay(firstNumber + " " + currentOperator + " " + secondNumber + "=") :
                    populateTopDisplay(secondNumber + " " + currentOperator + " " + firstNumber + "=");
    currentOperator=null;
    populateBottomDisplay(lastNmb);
    displayValue.push(lastNmb);
    storeNumber(lastNmb);
});

addBtn.addEventListener("click",()=>{
    if(currentOperator==null){
        currentOperator="+";
        let string=displayValue.join("");
        let number=Number(string);
        storeNumber(number);
        populateTopDisplay(string+" +");
        displayValue.length=0;
    } else {
        let string=displayValue.join("");
        let number=Number(string);
        displayValue.length=0;
        storeNumber(number);
        const lastNmb=operate(currentOperator,firstNumber,secondNumber);
        currentOperator="+"
        storeNumber(lastNmb);
        populateTopDisplay(lastNmb+" +");
        displayValue.length=0;
    }
});
