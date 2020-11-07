/* let arr = [1,2,3];

console.log(arr.length);
console.log(arr);
arr.length = 2;
console.log(arr.length);
console.log(arr);
arr.length = 3;
console.log(arr.length);
console.log(arr);
console.log(arr[2]); */

/* let arr = [1,3,6,11,4,2,4,9,17,16,0];

arr.slice().sort().forEach(element => { 
    if (element % 2 === 0) {
        console.log(element);
    }
    
});

console.log(arr); */

function negativeZero(val) {
    //console.log(val);
  return  1 / val === -Infinity ? true : false;
  

}

console.log(negativeZero(-0));