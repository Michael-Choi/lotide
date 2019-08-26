// FUNCTION IMPLEMENTATION
let findKey = (obj, func) => {
  for (let key in obj) {
    if (func(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

// //test cases
// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 }
//     },
//     x => x.stars === 2
//   ),
//   "noma"
// ); // => "noma"
