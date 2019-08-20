// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`💯  Assertion passed: "${actual} === ${expected}"`);
    return true;
  } else {
    console.log(`Assertion failed: "${actual} !== ${expected}"`);
    return false;
  }
};
const eqArrays = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const middle = arr => {
  console.log(arr);
  let returnArray = [];
  if (arr.length <= 2) {
    return returnArray;
  } else if (arr.length % 2 == 1) {
    let middleElement = Math.floor(arr.length / 2);
    returnArray.push(arr[middleElement]);
    return returnArray;
  } else {
    let middleElementLower = Math.floor(arr.length / 2);
    let middleElementHigher = Math.floor(arr.length / 2) + 1;
    returnArray.push(arr[middleElementLower]);
    returnArray.push(arr[middleElementHigher]);
    return returnArray;
  }
};

// TEST CODE
assertArrayEqual(middle([1, 2, 3]), [2]); // => should PASS
