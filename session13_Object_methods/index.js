const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
  'customer-id-5': {
    name: 'Oscar',
    age: undefined,
  },
  'customer-id-6': {
    name: 'Ann',
    age: null,
  },
  'customer-id-7': {},
  'customer-id-8': {
    name: 'Jim',
    age: NaN,
  },
};

// in obj
// out arr objs

// algo
// create arr  obj values
// iterate arr  and add id
// sort arr

const getCustomersList = obj => {
  const keysArr = Object.keys(obj);
  return Object.values(obj)
    .map((elem, index) => ({ ...elem, id: keysArr[index] }))
    .sort((currentObj, nextObj) => currentObj.age - nextObj.age);
};

const result = getCustomersList(customers);
console.log(result);
console.log(customers);
