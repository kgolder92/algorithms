/* eslint-disable no-console */
const fibonacci = (n) => {
  const fibonacciNums = [];
  fibonacciNums[0] = 0;
  fibonacciNums[1] = 1;

  if (n === 1) {
    return [0];
  }

  for (let i = 2; i < n; i += 1) {
    fibonacciNums.push(fibonacciNums[i - 1] + fibonacciNums[i - 2]);
  }
  return fibonacciNums;
};

console.log(fibonacci(4)); // -> 2
