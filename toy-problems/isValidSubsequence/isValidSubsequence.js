/* eslint-disable no-console */

/*
  determine whether the second array is a subsequence of the first one

  I: Array of integers, possible subqequence array of integers
  O: boolean true if second array is a subsequence of the first

  E: if there are two of the same numbers in the first array
  C: -

  create position
  iterate over main array
    if position is equal to the length of the array
      AND current element in sequence is equal to the current element in the main array
        return true

    if current element in sequence is equal to the current element in the main array
      increment position

  return false;

  O(n) time | O(1) space
*/

const isValidSubsequence = (array, sequence) => {
  let pos = 0;

  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    const currentElementinSequence = sequence[pos];

    if (pos === sequence.length - 1 && currentElementinSequence === current) {
      return true;
    }

    if (currentElementinSequence === current) {
      pos += 1;
    }
  }
  return false;
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8])); // -> true
