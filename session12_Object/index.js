// in arr keys arr value
// out obj

// algo
//  create new obj
// iterate arr and push keys and value in obj

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
// }

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values);

// console.log(result);
// in objs
// out bool

// algo
// create arr with obj1 and obj2 kays
// iterate arr and ckeck equal

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keys1.some(key => obj1[key] !== obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
  // null: null,
  // undefined,
  // NaN,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
  // null: null,
  // undefined,
  // NaN,
};

// const result1 = compareObjects(obj1, obj2);
// console.log(result1);
const result2 = compareObjects(obj1, obj4);
console.log(result2);
