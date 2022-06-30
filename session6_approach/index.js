// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

/**
 * @param {number} num
 * @return {undefined}
 */

function getIsPrime(number) {
  let isPrime = true;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    if (getIsPrime(number)) {
      console.log(number);
    }
  }
}

//  test

getPrimes(15);
