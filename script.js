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

let firstNumber=0,
    secondNumber=0,
    currentNumber=1;//this variable tells the program where to store the current integer:1=firsNumber/2=secondNumber
    operator=null;
const displayValue=["0"];

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
    operator=null;
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

    //number buttons eventListener
oneBtn.addEventListener("click",()=>{
    console.log(displayValue[0]);
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
    displayValue.push("1");
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
