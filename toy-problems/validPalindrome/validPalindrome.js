/* eslint-disable no-console */
/**
 * Given a string determine if it is a valid palindrome, considering only alphanumeric characters
 *
 * @param {string} s
 * @return {boolean}
 *
 * Example 1:
    Input: "race a car" => raceacar
    Output: false

 *  Example 2:
    Input: "A man, a plan, a canal: Panama" => amanaplanacanalpanama
    Output: true
*/

const isPalindrome = (s) => {
  if (s.length <= 0) return true;

  let filteredStr = '';
  for (let i = 0; i < s.length; i += 1) {
    const curr = s[i];
    if (curr.match(/^[A-Za-z0-9]+$/)) {
      filteredStr += curr;
    }
  }

  let reversedStr = '';
  for (let i = filteredStr.length - 1; i >= 0; i -= 1) {
    reversedStr += filteredStr[i];
  }

  if (reversedStr.toLowerCase() === filteredStr.toLowerCase()) return true

  return false;
};

console.log(isPalindrome('0p,p0'));
