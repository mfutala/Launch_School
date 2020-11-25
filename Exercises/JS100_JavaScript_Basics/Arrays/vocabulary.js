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
  ['happy', 'cheerful', 'merry', ['glad','sad', 'angry']],
  ['tired', ['sleepy', 'more sleepy'], 'even more sleepy', 'fatigued','drained'],
  ['excited', 'eager', ['enthused', ['crying','bored']], 'animated']];

/*
vocabulary.forEach(element => 
  Array.isArray(element) ?
    element.forEach(innerElement => console.log(innerElement)) : console.log(element));*/

//This is similar to others but just checks to see if the element is an Array. 
//I added a non array element in the beginning


/*
for(element of vocabulary) {
 if(Array.isArray(element)) {
   element.forEach(elements => {
     Array.isArray(elements) ? elements.forEach(xelements => console.log(xelements)): console.log(elements);
   } )
 } else {
   console.log(element);
 }
}


function myRecurse(aElement) {
  
  aString = aElement.map(element => element + ' ');
  console.log(aString)
  return aString;
}

let outPut = ''
vocabulary.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      outPut += (myRecurse(ele));
      //console.log(myRecurse(ele));
      //acc += (myRecurse(ele))
    } else {
      outPut += ele;
      //console.log(ele);
    }
  }, []);
*/
 //console.log(vocabulary);
 /*
outPut = outPut.split(' ');
console.log(outPut);

for(i = 0; i < outPut.length; i++) {
  console.log(outPut[i]);
}
*/
let anArray = [];
let otherObjectsFound = vocabulary.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      //acc.push(ele);
     anArray.push(ele);
    }
    return acc;
  }, []);

//console.log(outPut.split(' '));
//console.log(vocabulary.flat(Infinity));
console.log(otherObjectsFound);






