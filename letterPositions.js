// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!results[`${sentence[i]}`] && sentence[i] !== " ") {
      results[`${sentence[i]}`] = [];
    }
    if (results[`${sentence[i]}`]) {
      results[`${sentence[i]}`].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
