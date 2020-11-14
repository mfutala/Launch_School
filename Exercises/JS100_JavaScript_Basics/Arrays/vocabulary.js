/*
Vocabulary
We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.


let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...
*/

let vocabulary = ['hello world',
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', ['sleepy', 'more sleepy'], 'even more sleepy', 'fatigued','drained'],
  ['excited', 'eager', 'enthused', 'animated']];

/*
vocabulary.forEach(element => 
  Array.isArray(element) ?
    element.forEach(innerElement => console.log(innerElement)) : console.log(element));*/

//This is similar to others but just checks to see if the element is an Array. 
//I added a non array element in the beginning

for([a,b,c,d] of vocabulary) {
  console.log(a,b,c);
}