/*
Car Keys
Write code that stores all of the vehicle property names in an array called keys.


let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
*/

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7,
  type: {
    car: 'car',
    truck: 'truck'
  },
};

//stconst LengthString = 'length';

function getKeyStrings(dictionaryParam) {
  let arrayOfKeys = Object.keys(dictionaryParam);

  let otherObjectsFound = arrayOfKeys.reduce((acc, ele) => {
    if (typeof dictionaryParam[ele] === 'object') {
      acc.push(ele);
    }
    return acc;
  }, []);

  if (otherObjectsFound.length === 0) {
    return arrayOfKeys;
  } else {

    otherObjectsFound.reduce((acc, ele) => {
      acc = dictionaryParam[ele];
      arrayOfKeys.push(getKeyStrings(acc));
      return acc;
    }, {});

    return arrayOfKeys.flat(Infinity);
     
  }

}

let otherObjectsFound = arrayOfKeys.reduce((acc, ele) => {
    if (typeof dictionaryParam[ele] === 'object') {
      acc.push(ele);
    }
    return acc;
  }, []);

//let keys = Object.keys(vehicle);

//console.log(keys);

let result = getKeyStrings(vehicle);

console.log(result);

