/*
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}
*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
   console.log("It's true!");
   
  }
console.log(obj[prop]);
};

/*
Solution
The condition of our if statement on line 11 returns false for all properties, because property names are always strings, while the body of our for loop looks for the Boolean value true.

Discussion
Object property names are always strings. When we omit quotes around our property names, JavaScript implicitly converts the name to a string. So true is not a property defined on obj, but 'true' is. You can check this for example as follows:

Copy Code
for (let prop in obj) {
  console.log(`${prop} (${typeof prop})`);
}

// logs:
// num (string)
// property name (string)
// true (string)
// fun (string)
In order for our code to log "It's true!", we need to compare obj's properties to 'true':

Copy Code
for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}
*/