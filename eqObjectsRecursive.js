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

/**
for each value in object
  if value==object: 
    return recurse(value):
  else:
    compare value with other object in same depth     
*/

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

// let a = { b: 2, a: { z: 1 } };
// let b = { a: { z: 1 }, b: 2 };
// console.log(eqObjects(a, b));
// const ab = { a: "2", b: "2" };
// const ba = { b: "2", a: "2" };
// console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
