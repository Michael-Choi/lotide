// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

function head(element) {
  return element[0];
}
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
