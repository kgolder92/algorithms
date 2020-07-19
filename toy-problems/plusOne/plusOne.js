/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const str = digits.join('');
  // eslint-disable-next-line no-undef
  const num = BigInt(str) + BigInt(1);
  return num.toString().split('');
};
console.log(plusOne([4, 0, 1]));
