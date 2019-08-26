// FUNCTION IMPLEMENTATION

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

module.exports = countLetters;
