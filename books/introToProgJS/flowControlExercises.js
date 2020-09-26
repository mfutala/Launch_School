//Exercise 1
/* function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(`The number that you entered is ${evenOrOdd(5)}`); */


// Excercise 3
/* function evenOrOdd(num) {
   if (!Number.isInteger(num)) {
    return "Not an Integer"; 
  } 

  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  } 
  
return !Number.isInteger(num) ? "Not an Integer" : "Is an Integer"

}
console.log(`The number that you entered is ${evenOrOdd(5.5)}`); */
  
//Exercise 5
/* 
if (foo()) {
  return 'bar' ;
} else {
  return qux();
}
*/
//Exercise 6 

/* function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}
let arr = [];
arr.splice(0, arr.length);
isArrayEmpty(arr);  */

/* //Exercise 7
function allCapsIfLongerThan10Chars(word) {
  return word.length > 10 ? word.toUpperCase(): word
}

console.log(allCapsIfLongerThan10Chars("Mammy")); */

//Exercise 8
function ranger(num) {
 
  switch (true) {
    case (num >= 0 && num <= 50):
      console.log(`The number ${num} is between 0 and 50`);
      break;
    case (num >= 51 && num <= 100):
      console.log(`The number ${num} is between 51 and 100`);
      break;
    case (num > 100):
      console.log(`The number ${num} is greater than 100`);
      break;
    case (num < 0):
      console.log(`The number ${num} less than 0`);
      break;
    default:
      console.log("You didn't enter a number");
      break;
  }
  
}
ranger(100.2);