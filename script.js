
const display = document.querySelector(".display-text")
let shouldResetScreen = false;

//Adding . as separator like iOS calculator
const addSeparator = () => {
  let cleaned = display.textContent.replace(/\./g, ""); // clean the string from .
  let [intPart, decPart] = cleaned.split(",");          // split integer from decimal part
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adding separator
  display.textContent = decPart ? `${intPart},${decPart}` : intPart; //recombining string
}

//Adding a digit in expression
const addDigit = function(digit) {

  //To insert the second operator
  if(shouldResetScreen) {
    display.textContent = ''
    shouldResetScreen = false;
  }

  if(display.textContent === "0"){
    display.textContent = digit;
    return
  }

  if(display.textContent === "-0"){
    display.textContent = "-".concat(digit);
    return
  }

  display.textContent += digit;
  addSeparator();
}

//Per gestire i calcoli, devo mettere . come separatore dei decimali
const getNumByInput = (input) => {
  let cleaned = input.replace(/\./g, ""); //clean the string from .
  cleaned = cleaned.replace(/\,/g,".");   //subsituing , with .
  return parseFloat(cleaned);
}

//Riconverto il risultato nel formato da display
const getOutputByNum = (output) => {
  output = output.toString()
  let [intPart, decPart] = output.split("."); // split integer from decimal part
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adding separator
  return decPart ? `${intPart},${decPart}` : intPart; //recombining string
}


let firstOperand = undefined;
let secondOperand = undefined;
let currentOperator = null;

const add = (num1,num2) => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1,num2) =>  num1 / num2;

//Operazione con operando singolo, la gestisco a parte
const percentage = (input) => {
  let result = getNumByInput(input) / 100;
  display.textContent = getOutputByNum(result);
  shouldResetScreen = true;
}

const operate = (firstOp,operator,secondOp) => {

  let num1 = getNumByInput(firstOp);
  let num2 = getNumByInput(secondOp);
  let result;

  switch(operator) {
    case "+":
      result = add(num1,num2);
      break;
    case "-":
      result = subtract(num1,num2);
      break;
    case "x":
      result = multiply(num1,num2);
      break;
    case "÷":
      if(num2 === 0){
        alert("You can't divide by zero")
        result = 0;
        break; 
      }
      result = divide(num1,num2);
      break;
    default:
      return null;
  }

  return getOutputByNum(roundResult(result));

}

const evaluate = () => {
  //Devo ancora inserire uno dei due operandi
  if(shouldResetScreen || firstOperand === undefined)
    return

  secondOperand = display.textContent;
  display.textContent = operate(firstOperand,currentOperator,secondOperand);

  //Resetto gli operandi ed operatore
  currentOperator = null;
  firstOperand = undefined;
  secondOperand = undefined;
  //A testo c'è ancora un numero, se premo un operando lo valuterò come firstOperand
  //Imposto shouldresetScreen nel caso voglia digitare un nuovo numero 
  shouldResetScreen = true;

}

const setOperator = (operator) => {
  //Se avevo già inserito un operatore, lancio la valutazione
  if (currentOperator !== null) 
    evaluate()

  firstOperand = display.textContent;
  currentOperator = operator;
  shouldResetScreen = true;

}

const btnNumbers = document.querySelectorAll('.number');
btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", () => addDigit(btnNumber.textContent))
})

const btnOperators = document.querySelectorAll('.operator');
btnOperators.forEach((btnOperator) => {
  btnOperator.addEventListener("click", () => setOperator(btnOperator.textContent))
})

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
  display.textContent = '0'
  firstOperand = undefined;
  secondOperand = undefined;
  currentOperator = null;
  shouldResetScreen = false;
})

const btnChangeSign = document.querySelector("#change-sign");
btnChangeSign.addEventListener("click", () => {
  let arr = display.textContent.split('');
  if (!arr.includes("-"))
    arr.splice(0,0,"-");
  else
    arr.splice(0,1);
  display.textContent = arr.join('');
});

const btnComma = document.querySelector("#comma");
btnComma.addEventListener("click", () => {
  if(display.textContent.includes(","))
    return
  display.textContent += ",";
});

const btnPercentage = document.getElementById("percentage")
btnPercentage.addEventListener("click", () => percentage(display.textContent))

const btnResult = document.getElementById("equal-sign");
btnResult.addEventListener("click", evaluate)

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}




