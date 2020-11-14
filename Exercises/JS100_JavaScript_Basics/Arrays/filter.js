/*  
Filter
Count the number of elements in scores that are 100 or above.


let scores = [96, 47, 113, 89, 100, 102];
*/

let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (score of scores) {
 score >= 100 ? count += 1 : '';
}

console.log(count); 
