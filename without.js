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

// const without = (source, remove) => {
//   let result = source;
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < remove.length; j++) {
//       if (remove.includes(result[i])) {
//         result.splice(i, 1);
//       }
//     }
//   }
//   console.log(result);
//   return result;
// };

const without = (source, remove) => {
  let result = source;
  result = result.filter(i => {
    return !remove.includes(i);
  });
  return result;
};

assertArraysEqual([2, 3], without([1, 2, 3], [1]));
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
