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

const countLetters = function(sentence) {
  let results = {};
  let temp = sentence.split(" ").join("");
  for (let letter of temp) {
    if (!results[`${letter}`]) {
      results[`${letter}`] = 1;
    } else {
      results[`${letter}`] += 1;
    }
  }
  console.log(results);
  return results;
};

countLetters("lighthouse in the house");
