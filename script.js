
const display = document.querySelector(".display")

//Evitare duplicazioni di codice, scrivi una funzione per gestire gli inserimenti
//TODO, aggiungere logica per inserire il punto ogni 3 numeri

const btn0 = document.querySelector("#digit-0");
btn0.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "0";
  }
});

const btn1 = document.querySelector("#digit-1");
btn1.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "1";
  }
});

const btn2 = document.querySelector("#digit-2");
btn2.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "2";
  }
});

const btn3 = document.querySelector("#digit-3");
btn3.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "3";
  }
});

const btn4 = document.querySelector("#digit-4");
btn4.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "4";
  }
});

const btn5 = document.querySelector("#digit-5");
btn5.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "5";
  }
});

const btn6 = document.querySelector("#digit-6");
btn6.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "6";
  }
});

const btn7 = document.querySelector("#digit-7");
btn7.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "7";
  }
});

const btn8 = document.querySelector("#digit-8");
btn8.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "8";
  }
});

const btn9 = document.querySelector("#digit-9");
btn9.addEventListener("click", () => {
  if(display.textContent.length < 9){
    display.textContent += "9";
  }
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
  display.textContent = ''
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


