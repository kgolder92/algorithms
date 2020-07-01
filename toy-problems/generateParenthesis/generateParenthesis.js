/* generate parenthesis
given n pairs of parenthesis write
function to generate all combinttion of well paired
parenthesis

Example:
  Input: n = 3

  Output: [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]

         (
     (       )
   (   )   (   )

  '(((' 3
  '(()' 1
  '()' 0
  '())' -1 BAD!!!

  input: number of parens
  output: is an array of strings(possible paren pairs)

descision tree beccuase of permutations

function generateParens that takes a number n
  create counter variable set to 0
  create result an array of valid paren combos

  inner function parenBuilder

  invoke parenBuilder with param

  return result

*/

const generateParenthesis = (n) => {
  const result = [];

  const parenBuilder = (current, branchCount) => {
    if (branchCount === 0 && current.length === n * 2) {
      result.push(current);
      return;
    }

    if (current.length > n * 2) return;

    if (branchCount < 0) return;

    parenBuilder(`${current}(`, branchCount + 1);
    parenBuilder(`${current})`, branchCount - 1);
  };

  parenBuilder('(', 1);

  return result;
};

console.log(generateParenthesis(3));
