// FUNCTION IMPLEMENTATION

const eqArrays = (actual, expected) => {
  console.log(actual, expected);
  if (actual.length != expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      console.log("is subarray");
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    } else {
      if (actual[i] !== expected[i]) {
        console.log(actual[i] !== expected[i]);
        console.log("primitive value is false");
        return false;
      }
    }
  }
  return true;
};

// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([[[2, 3]], [4]], [[[2, 3]], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
