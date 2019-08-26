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

module.exports = countOnly;
