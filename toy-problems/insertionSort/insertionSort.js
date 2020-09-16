/* eslint-disable no-console */

/**
 * Insertion sort
 * Given an array, sort it in place using insertion sort
 *
 * I: Array
 * O: Sorted input array
 *
 * Plan:
 *  iterate through the input array
 *    while the current element is less than the previous element
 *      swap them
 *      decrement i
 *  return array
 *
 * Time Complexity:
 *  O(n^2) time | O(1) space
 */

const swap = (array, i, prev) => {
  const arr = array;
  const tmp = array[i];
  arr[i] = array[prev];
  arr[prev] = tmp;
};

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];

    while (current < array[i - 1] && i > 0) {
      swap(array, i, i - 1);
      i -= 1;
    }
  }
  return array;
};

console.log(insertionSort([8, 5, 2, 9, 5])); // -> [2, 5, 5, 8, 9]
