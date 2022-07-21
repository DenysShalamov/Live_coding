// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 20,
//   },
//   'customer-id-3': {
//     name: 'Bob',
//     age: 17,
//   },
//   'customer-id-4': {
//     name: 'John',
//     age: '22',
//   },
//   'customer-id-5': {
//     name: 'Oscar',
//     age: undefined,
//   },
//   'customer-id-6': {
//     name: 'Ann',
//     age: null,
//   },
//   'customer-id-7': {},
//   'customer-id-8': {
//     name: 'Jim',
//     age: NaN,
//   },
// };

// in obj
// out arr objs

// algo
// create arr  obj keys
// iterate arr  and add id
// sort arr

// const getCustomersList = obj => {
//   return Object.keys(obj)
//     .map(key => ({ ...obj[key], id: key }))
//     .sort((a, b) => a.age - b.age);
// };

// const result = getCustomersList(customers);
// console.log(result);
// console.log(customers);

// algo
// 1 get array of key-value - entries
// 2 iterate array of entries - on every step create new obj
// 3 sort array

// good
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// norm
// use mao
// use push
// const getCustomersList = (customers) =>
//    Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// good
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

// 1 dom't use values
// 2 don't use index
// 3 bad naming
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values.map((el, index) => ({ ...el, id: keys[index] })).sort((a, b) => a.age - b.age);
// };

// 1 dom't use values
// 2 don't use index
// 3 bad naming
// remove redunt vars
// const getCustomersList = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// const getCustomersList = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// don't use shift
// fix eslint
// bad naming
// redundant vars
// const getCustomersList = obj => {
//   const moderArr = Object.entries(obj).map(arr => {
//     let id = { id: arr.shift() };
//     return (arr[0] = { ...arr[0], ...id });
//   });

//   return moderArr.sort((a, b) => a.age - b.age);
// };
// don't use index
// use push
// bad naming
// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc[index] = { id: elem, ...customers[elem] };
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);
