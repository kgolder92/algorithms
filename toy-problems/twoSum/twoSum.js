/* eslint-disable no-console */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const pastNumbers = {};
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const difference = target - current;
    const matchIndex = pastNumbers[difference];

    if (matchIndex) {
      return [matchIndex, i];
    }
    pastNumbers[current] = i;
  }
  return -1;
};

console.log(twoSum([2, 3, 11, 4, -2], 9));
