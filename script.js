
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


