/* 
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.
*/

let weather = ['rainy', 'sunny', "Let's stay inside!"];

let randomNum = Math.floor((Math.random() * Math.floor(3)));

if(weather[randomNum] === 'rainy') {
    console.log("Grab your umbrella") 
} else if (weather[randomNum] === 'sunny') {
    console.log("It's a beautiful day!");
} else {
    console.log("Let's Stay inside");
}




