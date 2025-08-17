
const display = document.querySelector(".display-text")
let numDigits = 0; //count numDigits in the expressions (max 12)

let input1;
let operator;
let input2;

//Adding . as separator like iOS calculator
const addSeparator = () => {
  let cleaned = display.textContent.replace(/\./g, ""); // clean the string from .
  let [intPart, decPart] = cleaned.split(",");          // split integer from decimal part
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adding separator
  display.textContent = decPart ? `${intPart},${decPart}` : intPart; //recombining string
}

const addDigit = function(digit) {

  if(display.textContent === "0"){
    display.textContent = digit;
    return
  }

  if(display.textContent === "-0"){
    display.textContent = "-".concat(digit);
    return
  }

  if(numDigits < 12){
    display.textContent += digit;
    numDigits += 1;
    addSeparator();
  }
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

const add = (num1,num2) => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1,num2) => num1 / num2;

const changeSign = (num) => num * (-1);

//Unica operazione con un solo operando, la gestisco a parte
const percentage = (input) => display.textContent = getOutputByNum(getNumByInput(input) / 100);

const operate = (in1,op,in2) => {

  let num1 = getNumByInput(in1);
  let num2 = getNumByInput(in2);
  let result;

  switch(op) {
    case "+":
      result = add(num1,num2);
      break;
    case "-":
      result = subtract(num1,num2);
      break;
    case "*":
      result = multiply(num1,num2);
      break;
    case "/":
      result = divide(num1,num2);
      break;
    default:
      console.log("Please insert a valid symbol.")
  }

  return getOutputByNum(result);

}

const btn0 = document.querySelector("#digit-0");
btn0.addEventListener("click",() => {
  addDigit("0");
});

const btn1 = document.querySelector("#digit-1");
btn1.addEventListener("click",() => addDigit("1"));

const btn2 = document.querySelector("#digit-2");
btn2.addEventListener("click",() => addDigit("2"));

const btn3 = document.querySelector("#digit-3");
btn3.addEventListener("click",() => addDigit("3"));

const btn4 = document.querySelector("#digit-4");
btn4.addEventListener("click",() => addDigit("4"));

const btn5 = document.querySelector("#digit-5");
btn5.addEventListener("click",() => addDigit("5"));

const btn6 = document.querySelector("#digit-6");
btn6.addEventListener("click",() => addDigit("6"));

const btn7 = document.querySelector("#digit-7");
btn7.addEventListener("click",() => addDigit("7"));

const btn8 = document.querySelector("#digit-8");
btn8.addEventListener("click",() => addDigit("8"));

const btn9 = document.querySelector("#digit-9");
btn9.addEventListener("click",() => addDigit("9"));

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
  display.textContent = '0'
  numDigits = 1;
  countOperator = 0;
})

const btnChangeSign = document.querySelector("#changeSign");
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

const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click",() => alert("prova"))

const btnSub = document.getElementById("sub");
btnSub.addEventListener("click",() => alert("prova"))

const btnMult = document.getElementById("multiply");
btnMult.addEventListener("click",() => alert("prova"))

const btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click",() => alert("prova"))

const btnPercentage = document.getElementById("percentage")
btnPercentage.addEventListener("click", () => percentage(display.textContent))

const btnResult = document.getElementById("result");
btnResult.addEventListener("click",() => alert("prova"))



