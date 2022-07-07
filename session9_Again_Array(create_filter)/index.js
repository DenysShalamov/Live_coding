// // input arr callback
// // output arr

// // algo
// // 1 create new arr
// // 2 iterate input arr
// // 3. pply callback for every el
// // 4 if true - push
// const filterArrayElements = (arr, callback) => {
//   const resultArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       resultArr.push(arr[i]);
//     }
//   }

//   return resultArr;
// };
// // test data
// // console.log(
// //   filterArrayElements([null, undefined, NaN, 1, -5, Infinity, -Infinity], elem => elem > 0),
// // );
// const testArr = [1, 2, 11, 0, -5, 5, 4, 8, NaN];
// const testCallback = (el, index, arr) => {
//   if (el > 10) {
//     return true;
//   }
//   return false;
// };

// const result = filterArrayElements(testArr, testCallback);
// console.log(result);

// // multiply

// function multiply(...args) {
//   console.log(args);
// };

// multiply(10, 7, 6);

// input arr callback
// output new arr

// callback
// input elem index input arr
// output changed elem

// algo
// new arr
// iterate input arr
// callback for every el
// change elem and push
// return arr

const mapArrayElements = (arr, callback) => {
  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    const changedElem = callback(arr[i], i, arr);
    resArr.push(changedElem);
  }
  return resArr;
};

// test
const testArr = [2, 3, 5, 0, -5, 'aaa', '', ' ', undefined, NaN, Infinity, -Infinity, null];

const res = mapArrayElements(testArr, (el, i) => (i > 3 ? el + 2 : el));

console.log(res);
