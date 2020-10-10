/* let readLineSync = require('readline-sync');
let age = readLineSync.question('How old are you? ');
age = parseInt(age);

for (i = 10; i <= 40; i += 10) {
    console.log(`In ${i} years you will be ${age + i}`)
} */

//Exercise 2

/* function factorial(num) {
let fact = 1;
    if (num <= 2) return num;

    for(i = num; i > 0 ; i -= 1) {
        return num * factorial(i - 1);
        }
    
}

console.log(factorial(7));
 */
/* 
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let tries = 0;
  let result = randomNumberBetween(1, 6);
  tries += 1;
  
  while (result <= 2) {
    result = randomNumberBetween(1, 6);
    tries += 1;
  }
  
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2'); */

  