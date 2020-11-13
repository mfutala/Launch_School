/*
Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

Copy Code
repeat(3, 'ha'); // 'hahaha'
*/

function repeat(num, line) {

return num >= 1 ? line + repeat(num - 1, line) : '';

}

console.log(repeat(1, 'ha'));



