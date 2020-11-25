/*
Solution
Copy Code
function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}
Discussion
One way to approach the calculation is by using a switch statement, as in our solution above. In case of 1 human year, we return the corresponding 15 cat years. In case of 2 human years, we return 24 cat years (15 for the first human year plus 9 for the second human year). In each other case, handled by the default statement, we start from 24 cat years for the first two human years and add 4 cat years per remaining human year.

Note that since we are explicitly returning from each case statement, it is not necessary to use break statements.
*/

function removeLastChar (word) {
  return word.substr(0,word.length -1);

}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'