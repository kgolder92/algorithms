/* eslint-disable no-console */
/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

  Return the running sum of nums.
  I: array
  O: array of running sums

  Example 1:
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

  Example 2:
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

  Example 3:
    Input: nums = [3,1,2,10,1]
    Output: [3,4,6,16,17]

 Time complexity:
    O(n) time | O(1) space
 */
const runningSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];

    nums.splice(i, 1, sum);
  }
  return nums;

  // OR with reduce

  // let counter = 0;
  // let sum = 0;
  // nums.reduce((accumulator, current) => {
  //   sum += current;
  //   nums.splice(counter, 1, sum);
  //   counter += 1;
  // }, nums[0]);
  // return nums;
};
console.log(runningSum([3, 1, 2, 10, 1]));
