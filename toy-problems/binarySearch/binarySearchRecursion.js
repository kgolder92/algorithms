/* eslint-disable no-console */
/**
given a sorted array of integers as well as a target integer use
binary search tp determine if the target number is in the array

I: Array, Number - target
O: Boolean

Plan:
create inner function
takes in two pointers - R and L
  if L > R return -1

calculate middle pointer
if target = middle
  return middle

if target > middle
  L = middle + 1
  call inner function and pass in L and then R
if target < middle
  R = middle - 1
  call inner function and pass in L and then R

Time | Space complexity:
  O(log(n)) time | O(log(n)) space
*/
const binarySearch = (array, target) => {
  const findTarget = (left, right) => {
    if (left > right) {
      return -1;
    }

    const middle = Math.floor((right + left) / 2);

    if (array[middle] === target) return middle;

    if (target < array[middle]) {
      return findTarget(left, middle - 1); // call findTarget on left array
    }
    return findTarget(middle + 1, right); // call findTarget on right array
  };
  return findTarget(0, array.length - 1);
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)); // -> 3
