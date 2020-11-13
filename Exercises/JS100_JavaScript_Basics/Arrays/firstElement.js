/*
Write a function that returns the first element of an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'
What would you return if the input array was empty?
*/

function last(arr) {
  return arr[arr.length -1];
}

function first(arr) {

return arr === undefined || arr.length === 0  ? "Empty Array or wrong info submitted" : arr[0];

}

console.log(last(['Earth', 'Moon', 'Mars'])); // 'Earth'
//console.log(first('hello'));
//console.log(first([]));
//console.log(first());

