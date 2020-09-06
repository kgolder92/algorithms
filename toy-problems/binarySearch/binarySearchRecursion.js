/* eslint-disable no-console */
/**
given a sorted array of integers as well as a target integer use
binary search tp determine if the target number is in the array

I: Array, Number - target
O: Boolean

Plan:
create two pointers - R and L
calculate middle pointer
compare middle and target
if target > middle
  move left pointer to index middle + 1
if target < middle
  move right pointer to index middle - 1
if target = middle
  return true
if right pointer is less than left ptr or left ptr > right ptr
  return false

*/
const binarySearch = (array, target) => {
  const findTarget = (left, right) => {
    if (left > right || right < left) {
      return -1;
    }

    const middle = Math.floor((right + left) / 2);

    if (array[middle] === target) {
      return middle;
    }
    if (target < array[middle]) {
      return findTarget(left, middle - 1);
    }
    return findTarget(middle + 1, right);
  };
  return findTarget(0, array.length - 1);
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)); // -> 3
