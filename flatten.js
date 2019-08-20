// const flatten = arr => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 1) {
//       for (let j = 0; j < arr[i].length; j++) {
//         result.push(parseInt(arr[i][j]));
//       }
//     } else {
//       result.push(parseInt(arr[i]));
//     }
//   }
//   console.log(result);
// };

const flatten = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(parseInt(arr[i][j]));
      }
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
};
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
