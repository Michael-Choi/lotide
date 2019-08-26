function eqObjects(obj1, obj2) {
  //check length of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    console.log("key length different");
    return false;
  }

  // if primitive values from keys passed in are equal return true
  if (obj1 === obj2) {
    return true;
  }
  // compare objects with same number of keys
  //if other object doesn't have this prop
  for (let key in obj1) {
    console.log(key);
    if (!(key in obj2)) {
      console.log("key not found");
      return false;
    }
    if (eqObjects(obj1[key], obj2[key]) == false) {
      return false;
    }
  }
  return true;
}
module.exports = eqObjects;
