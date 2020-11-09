/*
Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.


let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for(element of fish) {
  if(element === 'Nemo') break;
  console.log(element);
};

