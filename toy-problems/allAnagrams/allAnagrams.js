/* eslint-disable no-console */
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  *
  */

const allAnagrams = (string) => {
  const anagrams = {};

  const builder = (current, charactersLeft) => {
    if (current.length === string.length) {
      anagrams[current] = true;
    }

    for (let i = 0; i < charactersLeft.length; i += 1) {
      builder(current + charactersLeft[i],
        charactersLeft.slice(0, i) + charactersLeft.slice(i + 1));
    }
  };
  builder('', string);
  return Object.keys(anagrams);
};
console.log(allAnagrams('abc')); // -> [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
