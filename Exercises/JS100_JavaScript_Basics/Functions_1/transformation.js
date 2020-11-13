/*
Transformation
Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.
*/

const regex = /Ruby/gi;
const saying = "Captain Ruby";

console.log("\n" + saying + "\n");

console.log(saying.replace(regex, 'Javascript'));

console.log(saying.slice(0,saying.indexOf("Ruby"))+ "JavaScript");

console.log(saying.replace("Ruby", "Javascript"));