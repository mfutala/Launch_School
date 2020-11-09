/*

Take a moment to read the MDN documentation on the continue statement.

Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

*/
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

/*for(x = 0; x < cities.length; x +=1) {

if(cities[x] === null) {
  continue;
}
console.log(cities[x].length);
}*/

for(let city in cities) {

  if(!cities[city]) continue;
 
  console.log(cities[city]);
}
