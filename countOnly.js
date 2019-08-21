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

const countOnly = function(allItems, itemsToCount) {
  let results = {};

  allItems.map(name => {
    if (itemsToCount[`${name}`]) {
      if (!results[`${name}`]) {
        results[`${name}`] = 1;
      } else {
        results[`${name}`] += 1;
      }
    }
  });
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//result1 is an object that is returned from countOnly
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
