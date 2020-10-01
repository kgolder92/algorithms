/* eslint-disable no-console */
/*
 * Write a function that accepts a 2-dimensional array
 (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 *
 * I: Matrix
 * O: Array of values in matrix in a spiraled order
 * E: Matrix is empty return []
 *
 * example1:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]

    * example2:
    spiralTraversal([
      [1, 2, 3, 4,  5,  6 ],
      [7, 8, 9, 10, 11, 12],
      [13,14,15,16, 17, 18]
    ]);

    returns [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]

    * example1:
    spiralTraversal([
      [1, 2, 3 ],   _ _ _   1. right
      [4, 5, 6 ],   _ _  |  2. down
      [7, 8, 9 ],  |   | |  3. left
      [10,11,12]   |_ _ _|  4. up
    ]);

    Plan:
    1. array.concat(mstrix[0]) then decrement length maybe by using
       shift to pop off the first row in the matrix so it cant be iterated through again
    2. iterate through the matrix and push the current rows last
       element to the array and then pop it off
    3. array.concat(array.reverse) matrix.pop the last row off
    4. iterate through the length of the matrix and push the
       current row's first element in and then shift it so it removes it

    create array variable
    while matrix length >= 1
      if matrix.length <= 0 return

      right
      concat the first row to result
      remove first row with matrix.shift

      down
      iterate through the length of the matrix
        push current row's last element to the array
        pop the current row's last element

      left
      concat the last row in the matrix reversed
      matrix.pop

      up
      iterate through the length of the matrix
        push the current row's first element into array
        shift the current row's first element

      if matrix.length > 0 call inner function(array, matrix)

    return array
 */

const spiralTraversal = (matrix) => {
  let array = [];
  const grid = matrix;

  while (grid.length) {
    // right
    array = array.concat(grid.shift());

    if (grid.length === 0) return array;

    // down
    for (let i = 0; i < grid.length; i += 1) {
      const row = grid[i];

      array.push(row.pop());
    }

    // left
    array = array.concat(grid.pop().reverse());

    // up
    for (let j = 0; j < grid.length; j += 1) {
      const row = grid[j];

      array.push(row.shift());
    }
  }
  return array;
};

const traversalResult = spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(traversalResult); // -> [1, 2, 3, 6, 9, 8, 7, 4, 5]
