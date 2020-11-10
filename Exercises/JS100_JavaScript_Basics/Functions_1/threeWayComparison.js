/*
Three-way comparison
Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

Copy Code
compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
*/

function compareByLength(str1, str2) {
  compare = str1.length - str2.length;

 if(compare === 0) {
   console.log(0)
 } else if (compare < 0 ) {
   console.log(-1);
 } else {
   console.log(1);
 }
};


compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0