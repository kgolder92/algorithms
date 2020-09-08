/* eslint-disable no-console */
/**
given a sorted array of integers as well as a target integer use
binary search tp determine if the target number is in the array

I: Array, Number - target
O: Boolean

Plan:
create two pointers - R and L
while L <= R
  calculate middle pointer
  if target = middle
    return middle
  if target > middle
    move left pointer to index middle + 1
  if target < middle
    move right pointer to index middle - 1
  return -1

Time | Space complexity:
  O(log(n)) time | O(1) space
*/

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) { // while left is not greater than right
    const middle = Math.floor((left + right) / 2);

    if (target === array[middle]) return middle;

    if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)); // -> 3
