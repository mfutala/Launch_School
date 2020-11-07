/* 
Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
*/

let weather = ['rainy', 'sunny', "Let's stay inside!"];

let randomNum = Math.floor((Math.random() * Math.floor(3)));

switch(weather[randomNum]) {
    case 'rainy': console.log("Grab your umbrella");
                  break;
    case 'sunny': console.log("it's a beautiful day!");
                  break;
    default: console.log("Let's stay inside");
                  break;
}