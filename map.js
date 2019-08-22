const map = (array, callback) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    results[i] = callback(array[i]);
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
