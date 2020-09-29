/* eslint-disable no-console */
/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.
 *
 * I: array
 * O: Number - largest product
 *
 * Plan:
 *  sort input array
 *  create product1 var and assign it to the last three elements in the array        multiplied
 *  create product2 var and assign it to the first two elements in the arraya nd the last element
 *  return math.max of product 1 and 2
 *
 * Time | Space Complexity:
 *  O(n) time | O(1) space
 */

const largestProductOfThree = (array) => {
  const sorted = array.sort();

  const product1 = sorted[sorted.length - 1] * sorted[sorted.length - 2]
  * sorted[sorted.length - 3];
  const product2 = sorted[0] * sorted[1] * sorted[sorted.length - 1];

  return Math.max(product1, product2);
};

console.log(largestProductOfThree([-1, -3, 4, 2]));
