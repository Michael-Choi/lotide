assertEqual = require("./assertEqual");

const tail = function(array) {
  let newarray = array.splice(1);
  return newarray;
};

module.exports = tail;
