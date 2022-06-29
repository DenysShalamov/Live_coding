function getSenseOfLife() {
  return 42;
}

// test
console.log(getSenseOfLife());

function getSquared(num) {
  return Number.pow(num);
}
// test
console.log(getSquared(2));

function sum(num1, num2) {
  return Number.sum(num1, num2);
}

// test

console.log((2, 3));

function printMessage(num) {
  return `I am ${num} years old`;
}
console.log(printMessage(0));
console.log(printMessage(34));
console.log(printMessage(-2));
console.log(printMessage('34'));
console.log(printMessage('thirty four'));
console.log(printMessage(null));
console.log(printMessage(undefined));
console.log(printMessage(Infinity));
console.log(printMessage(-Infinity));

function sumFunc(from, to) {
  let res = 0;

  for (let i = from; i <= to; i++) {
    res += i;
  }

  return res;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondFrom);
}

console.log(compareSums(2, 5, 3, 8));

const mult = (firstNum, secondNum) => firstNum * secondNum;
console.log(mult(2, 3));
console.log(mult('1', 2));

const square = num => num ** 2;

console.log(square(2));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
