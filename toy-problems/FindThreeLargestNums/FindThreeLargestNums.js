/* eslint-disable no-console */
/*
  Given an array, find the three largest numbers

  I: array
  O: array - of the three largest numbers
  C: cant sort the input array
  E: N\A input array will always have at least three integers

  Plan:
  create a three num array
  iterate through input array
     check if the current element is greater than the 3 num array[2]
     if it is then push it on
    if not then check if its larger than the second and
     then the first
*/
const shift = (largestNums, num, index) => {
  const array = largestNums;
  for (let i = 0; i <= index; i += 1) {
    if (i === index) {
      array[i] = num;
    } else {
      array[i] = largestNums[i + 1];
    }
  }
};

const updateLargest = (largestNums, num) => {
  if (largestNums[2] === null || num > largestNums[2]) {
    shift(largestNums, num, 2);
  } else if (largestNums[1] === null || num > largestNums[1]) {
    shift(largestNums, num, 1);
  } else if (largestNums[0] === null || num > largestNums[0]) {
    shift(largestNums, num, 0);
  }
};

function findThreeLargestNumbers(array) {
  const greatestNums = [null, null, null];
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    updateLargest(greatestNums, current);
  }
  return greatestNums;
}

console.log(findThreeLargestNumbers([55, 7, 8, 3, 43, 11])); // -> [11, 43, 55]
