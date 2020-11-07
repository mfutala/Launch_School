/* 
Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

Copy Code
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce']
*/
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce']
for(element of fish){
    console.log(element);
    if(element === 'Nemo') break;
}

