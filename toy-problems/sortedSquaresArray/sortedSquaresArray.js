/* eslint-disable no-console */
/* write a function that takes in a non-empty array of integers sorted
    and returns a new array of the same length with the squares of the
    original integers also sorted

  I: array of integers
  O: a new array that holds the squared numbers from the input array
  C: array must be sorted in ascending order so if integer is negative
  create result array
  create left and right pointers
  iterate through the array
    compare abs value of left and right pointer
    push which ever one is smaller onto resulting array
    increment or decrement which ever pointer's value we push
  return new array

  Time complexity / Space complexity:
    O(n) / O(n)
*/
const sortedSquaredArray = (array) => {
  const squares = new Array(array.length).fill(0);
  let leftptr = 0;
  let rightptr = array.length - 1;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    const smallerNum = array[leftptr];
    const largerNum = array[rightptr];

    if (Math.abs(smallerNum) > Math.abs(largerNum)) {
      squares[i] = smallerNum * smallerNum;
      leftptr += 1;
    } else {
      squares[i] = largerNum * largerNum;
      rightptr -= 1;
    }
  }
  return squares;
};

console.log(sortedSquaredArray([-1, 0, 1, 2, 3]));
