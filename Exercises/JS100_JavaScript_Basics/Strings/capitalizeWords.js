/*
Capitalize Words
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

let words = 'launch school tech & talk';

let newSentance = ''


words.split(' ').forEach(element => newSentance += (element[0].toUpperCase()) + element.substr(1) + ' ');

console.log(newSentance);
