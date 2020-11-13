/*
Blank? Version 2
Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

Copy Code
isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
*/

function isBlank(word) {
return word.length === 0 || word.includes(' ');
}


console.log(isBlank('mars')); // false
console.log(isBlank(' hello'));   // true
console.log(isBlank(''));     // true