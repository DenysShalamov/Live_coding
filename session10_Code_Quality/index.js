// const withdraw = (clients, balances, client, amount) => {
//   // remove logic from if
//   // get rid of duplicated code
//   //  don't use find

//   // bad
//   // balances.find((item, index) => clients.indexOf(client) === index)

//   // good
//   balances(clients.indexOf(client));
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) return -1;
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// const withdraw = (clients, balances, client, amount) => {
//   return balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
// };
// // const res = bool ? value1 : value2;

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)]
// if (clientBalance >= amount) {
//  clientBalance -= amount;
//  balances[clients.indexOf(client)] = clientBalance;
//  return (clientBalance);
// };

// return -1;
// }

// GOOD
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = balances[clients.indexOf(client)];

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;

//   return balances[clientIndex];
// };

// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = balances[clients.indexOf(client)];
//   if (clientIndex < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clients.indexOf(client)];
// };

// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// const getRandomNumbers = (length, from, to) => {
//   const fromCell = Math.cell(from);
//   const toCell = Math.cell(to);

//   if (toCell - fromCell < 1) {
//     return null;
//   }

//   return new Array(length).fill(Math.trunc(Math.random() * (toCell - fromCell) + fromCell));
// };
