/*
Display Division
Determine the output that the following code will log to the console.

Solution
There will be no output, because the function multiplesOfThree is not invoked.

Discussion
To invoke the function, we should append parentheses to the function name on line 10, like so: 

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

*/

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;