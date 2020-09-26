/* let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
} */

let names = ["chris", 'kevin', 'Naveed', "pete", 'Victor'];
let upperCaseNames = [];
/* let index = 0;

while (index < names.length) {
  //if (names[index] === 'Naveed') continue;
  upperCaseNames.push(names[index].toUpperCase());
  index += 1;
}

console.log(upperCaseNames); */

names.forEach(name => {
  name != 'Naveed' ? upperCaseNames.push(name.toUpperCase()): "";
})
  
  console.log(upperCaseNames);

