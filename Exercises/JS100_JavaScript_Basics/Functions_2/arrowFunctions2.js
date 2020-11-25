/*
Arrow Functions (Part 2)
The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
*/

let initGame = x => {
return {
  level: 1,
  score: 0,
  player: 'Bob'
};
};

    


    
 
 ;

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
console.log("player: " + game.player);