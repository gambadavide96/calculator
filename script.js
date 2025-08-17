
const display = document.querySelector(".display")
let numDigits = 0; //count numDigits in the expressions (max 9)

//Adding . as separator like iOS calculator
const addSeparator = () => {
  let cleaned = display.textContent.replace(/\./g, ""); // clean the string from .
  let [intPart, decPart] = cleaned.split(",");          // split integer from decimal part
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // adding separator
  display.textContent = decPart ? `${intPart},${decPart}` : intPart; //recombining string
}

const addDigit = function(digit) {

  //Gestisco il caso in cui era stato inserito uno zero iniziale
  if(display.textContent === "0"){
    display.textContent = digit;
    return
  }

  if(numDigits < 10){
    display.textContent += digit;
    numDigits += 1;
    addSeparator();
  }
}


const btn0 = document.querySelector("#digit-0");
btn0.addEventListener("click",() => {
  //Per evitare di inserire zero ripetuti all'inizio
  if (display.textContent === "0")
    return
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
  display.textContent = ''
  numDigits = 0;
})

const btnChangeSign = document.querySelector("#changeSign");
btnChangeSign.addEventListener("click", () => {
  let arr = display.textContent.split('');
  if (!arr.includes("-"))
    arr.splice(0,0,"-");
  else
    arr.splice(0,1);
  display.textContent = arr.join('');
})


let num1;
let operator;
let num2;

const add = (num1,num2) => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1,num2) => num1 / num2;

const percentage = (num) => num / 100;

const changeSign = (num) => num * (-1);

const operate = (n1,op,n2) => {

  switch(op) {
    case "+":
      add(n1,n2);
      break;
    case "-":
      subtract(n1,n2);
      break;
    case "*":
      multiply(n1,n2);
      break;
    case "/":
      divide(n1,n2);
      break;
    default:
      console.log("Please insert a valid symbol.")
  }

}


