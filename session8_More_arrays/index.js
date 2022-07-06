// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];
// console.log(numbersList);
// map
//  in callback
// out array

// callback
// in element, index, (optional), array(optional)

// option 1

// const mapRes = numbersList.map(elem => {
//   const newElem = elem * elem;
//   return newElem;
// });
// console.log(mapRes);

// option 2
// const mapRes = numbersList.map(elem => elem ** 2);
// console.log(mapRes);

// forEach
// in callback
// out none

// callback
// in elem
// out undef

// numbersList.forEach(elem => elem > 0 ? console.log(elem));

// reduce
// in callback
// out anny type

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

transactions.reduce((acc, elem) => (elem > 100 ? acc + elem : acc), 0);
