/*
Internationalization 2
Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:


localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.
*/
function extractLanguage(word) {
  return word.split('_')[0];
}

function extractRegion(word) {
 return word.split('_')[1].split('.')[0];
}

function localGreet(local) {
 const greetings = {
    en: 'Whats up!', 
    fr: 'Salute!',
    locale: {
      US: 'Hi!',
      GB: 'Hello!',
      AU: 'Howdy!',
      FR: 'French, FR',
      CA: 'French CA!',
      MA: 'French MA!',
     }
  };

if(local.includes('_') ) {
  let region = extractRegion(local);
  let language = extractLanguage(local);
  
  if(!greetings[language] || !greetings.locale[region]) {
      return 'language not in database!';
  } 
  return greetings.locale[region];
} else {
  return greetings[extractLanguage(local)]? greetings[extractLanguage(local)] : 'Language not in database!';
};
  
  

};
console.log(localGreet('ga'));
console.log(localGreet('en'));
console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr'));
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'