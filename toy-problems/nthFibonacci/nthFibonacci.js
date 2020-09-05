/* eslint-disable no-console */
const fibonacci = (n) => {
  // const fibonacciNums = [];
  // fibonacciNums[0] = 0;
  // fibonacciNums[1] = 1;

  // if (n === 1) {
  //   return [0];
  // }

  // for (let i = 2; i < n; i += 1) {
  //   fibonacciNums.push(fibonacciNums[i - 1] + fibonacciNums[i - 2]);
  // }
  // return fibonacciNums;

  const fibNums = [0, 1];
  let counter = 3;

  while (counter <= n) {
    const next = fibNums[0] + fibNums[1];
    fibNums[0] = fibNums[1];
    fibNums[1] = next;
    counter += 1;
  }

  return n > 1 ? fibNums[1] : fibNums[0];
};

console.log(fibonacci(6)); // -> 2
