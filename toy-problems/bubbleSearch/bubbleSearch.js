/* eslint-disable no-console */
/**
 * Bubble sort
 * Given an array sort it using bubble sort in place
 * I: Array
 * O: Input Array sorted
 *
 * Plan:
 * while there have been swaps
 *  iterate through input array decrementing the length
 *  after each pass for (tiny optimization)
 *    check if current is > next
 *      swap
 *    else
 *      continue
 *
 * Time Complexity:
 *  O() time | O(1) space
 */

const swap = (array, i, next) => {
  const ar = array;
  const tmp = array[i];
  ar[i] = array[next];
  ar[next] = tmp;
};

const bubbleSort = (array) => {
  let { length } = array;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < length; i += 1) {
      const next = i + 1;

      if (array[i] > array[next]) {
        swap(array, i, next);
        isSorted = false;
      }
    }
    length -= 1;
  }
  return array;
};

console.log(bubbleSort([5, 3, 4, 8, 6])); // -> [3, 4, 5, 6, 8]
