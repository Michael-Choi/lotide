// FUNCTION IMPLEMENTATION

const eqArrays = require("./eqArrayRecursive");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`💯  Assertion passed: "${actual} === ${expected}"`);
    return true;
  } else {
    console.log(`Assertion failed: "${actual} !== ${expected}"`);
    return false;
  }
};

module.exports = assertArraysEqual;
