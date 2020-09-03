/* eslint-disable no-console */
/**
 * given a n x n matrix, determine if the matrix is valid.
 * A matrix is valid if every row AND column contains exactly
 * the numbers  1 - 3 and there is no duplicate values in
 * both the cols and rows
 *
 * I: Matrix
 * O: String - "INVALID" or "VALID"
 *
 * Example 1:
 * input:  1 2 3   output: "VALID"
 *         2 3 1
 *         3 1 2
 *
 * Example 2:
 * input:  1 2 3   output: "INVALID"
 *         1 2 3
 *         1 2 3
 *
 * Example 3:
 * input:  3 5 7   output: "INVALID"
 *         5 2 8
 *         4 1 6
 *
 * Plan:
 * 1. Iterate through matrix
 * 2. Check current element if it is within range of 1 - n
 *      if it is then precede to step three
 *      else return "INVALID"
 * 3. Check for any duplicates with in the row and col
 *      if there is a duplicate return "INVALID"
 * 4. return "VALID"
 */

const hasDuplicates = (matrix, row, col) => {
  const setCols = new Set(col);
  const setRows = new Set(row);

  if (setCols.size !== col.length || setRows.size !== row.length) return false;

  return true;
};

const isSudokuValid = (matrix) => {
  const cols = [];
  for (let row = 0; row < matrix.length; row += 1) {
    cols.push(matrix[row][0]);

    for (let col = 0; col < matrix[row].length; col += 1) {
      const current = matrix[row][col];

      if (current < 1 || current > matrix.length) return 'INVALID';

      const isValid = hasDuplicates(matrix, matrix[row], cols);

      if (!isValid) return 'INVALID';
    }
  }
  return 'VALID';
};

const grid = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
];
console.log(isSudokuValid(grid)); // -> 'VALID'
