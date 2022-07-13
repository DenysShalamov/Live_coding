/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

//  input obj, string, any type(value)
// output obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// // test

const transaction = {
  amount: 170,
};

// console.log(transaction, 'currency', 'USD');
// console.log(transaction, 'null', null);
// console.log(transaction, 'undefined', undefined);

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

// console.log(addPropertyV2(transaction, 'currency', 'USD'));
// console.log(addPropertyV2(transaction, 'null', null));
// console.log(addPropertyV2(transaction, 'undefined', undefined));

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// const res1 = addPropertyV3(transaction, 'currency', 'USD');
// const res2 = addPropertyV3(res1, 'amount', 300);
// console.log('result 1', res1);
// console.log('result 2', res2);
// console.log('obj after', transaction);

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// const res1 = addPropertyV4(transaction, 'currency', 'USD');
// const res2 = addPropertyV4(res1, 'amount', 300);
// console.log('result 1', res1);
// console.log('result 2', res2);
// console.log('obj after', transaction);
