/* 
Exercise 3
let rlSync = require('readline-sync');
let num1 = rlSync.question("Enter the first number ");
let num2 = rlSync.question("Enter the second number ");

function multiply(numb1, numb2) {
  

  return numb1 * numb2;
}

console.log(`The product of the two numbers is ${multiply(num1, num2)}`); */

//Exercise 4
function times(num1, num2) {
  let result = num1 * num2;
  console.log(result);
  return result;
}

let total = 1;
for (x = 1; x <= 5; x++){
  total = times(x,total);
}


