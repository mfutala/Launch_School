  /* let rlSync = require('readline-sync');
  let fName = rlSync.question('What is your First Name? ');
  let lName = rlSync.question('What is your Last Name? ');


console.log(`Hello, ${fName} ${lName}!`); */

function greeter() {
  let rlSync = require('readline-sync');
  let fName = rlSync.question('What is your First Name? ');
  let lName = rlSync.question('What is your Last Name? ');

  return fName + " " + lName;
}

console.log(`Hello ${greeter()}`);
