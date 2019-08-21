// FUNCTION IMPLEMENTATION
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`💯  Assertion passed: "${actual} === ${expected}"`);
    return true;
  } else {
    console.log(`Assertion failed: "${actual} !== ${expected}"`);
    return false;
  }
}

const eqArrays = (actual, expected) => {
  for (let i = 0; i < Math.max(actual.length, expected.length); i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length != Object.keys(object2).length) {
    console.log("lengths different");
    return false;
  }
  for (let keys in object1) {
    if (!Array.isArray(object1[keys])) {
      if (object1[keys] !== object2[keys]) {
        console.log(object1[keys], object2[keys]);
        return false;
      }
    } else {
      return eqArrays(object1[keys], object2[keys]);
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected) == true) {
    console.log(
      `💯  Assertion passed: "${inspect(actual)} === ${inspect(expected)}"`
    );
    return true;
  } else {
    console.log(
      `Assertion failed: "${inspect(actual)} !== ${inspect(expected)}"`
    );
    return false;
  }
};

let a = {
  a: 123,
  b: [1, 2, 3]
};

let b = {
  a: 123,
  b: [1, 2, 3]
};
assertObjectsEqual(a, b);
