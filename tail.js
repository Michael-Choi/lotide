// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let newactual = actual.join("");
  let newexpected = expected.join("");
  if (newactual === newexpected) {
    console.log(`💯  Assertion passed: "${actual} === ${expected}"`);
    return true;
  } else {
    console.log(`Assertion failed: "${actual} !== ${expected}"`);
    return false;
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const tail = function(array) {
  let newarray = array.splice(1);
  return newarray;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
