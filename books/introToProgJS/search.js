let arr = [3,1,5,9,2,6,4,7];
let indexOf5 = -1;

for (i = 0; i < arr.length; i+=1) {
    if (arr[i] === 5) {
        indexOf5 = i;
        break;
    }
}

console.log(indexOf5);

