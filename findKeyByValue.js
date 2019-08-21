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

const findKeyByValue = (object, value) => {
  for (let key in object) {
    if (object[key] == value) {
      return key;
    }
  }
  return undefined;
};

//test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
