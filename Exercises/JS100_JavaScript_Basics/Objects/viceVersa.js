/*
Write code that does the reverse, starting from a nested array of pairs and building an object.

Copy Code
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];


let person = {};
for(const [key, value] of nestedArray) {
  person[key] = value;
}

console.log(person);