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

export default assertArrayEqual;

// TEST CODE
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
