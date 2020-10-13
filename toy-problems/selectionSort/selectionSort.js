/* eslint-disable no-console */
/*
Selection sort
[8, 5, 2, 9, 5, 6, 3]

Input: Array
Output: Input array sorted

Plan:
  iterate through the array
    create a min var and assign it to i
    for each element in the array iterate through the array
      check if the current element is less than array [min]
        reassign min to equal current index
    swap the min val with the start of the sub sorted arr index which is i
  return array

Time | Space Complexity
  O(n^2) Time | O(1) Space
*/

const swap = (array, i, j) => {
  const arr = array;
  const tmp = array[j];
  arr[j] = array[i];
  arr[i] = tmp;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    let min = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    swap(array, i, min);
  }
  return array;
};

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3])); // -> [2, 3, 5, 5, 6, 8, 9]
