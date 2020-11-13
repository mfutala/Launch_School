/*
https://www.youtube.com/watch?v=mRj1RKh4xyY
*/

function extractRegion(word) {
return word.split('_')[1].split('.')[0];
//return word.slice(3,5);
}

console.log(extractRegion('eng_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'