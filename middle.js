const middle = arr => {
  console.log(arr);
  let returnArray = [];
  if (arr.length <= 2) {
    return returnArray;
  } else if (arr.length % 2 == 1) {
    let middleElement = Math.floor(arr.length / 2);
    returnArray.push(arr[middleElement]);
    return returnArray;
  } else {
    let middleElementLower = Math.floor(arr.length / 2);
    let middleElementHigher = Math.floor(arr.length / 2) + 1;
    returnArray.push(arr[middleElementLower]);
    returnArray.push(arr[middleElementHigher]);
    return returnArray;
  }
};

console.log(middle([2, 3, 4, 5]));
