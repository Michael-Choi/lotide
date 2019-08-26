// FUNCTION IMPLEMENTATION

const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrayRecursive");
const eqObjects = require("./eqObjectsRecursive");

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

module.exports = assertObjectsEqual;
