/* eslint-disable no-unused-vars */
/*
given a BST go through from left to right and sum all of the values
for each branch and push each sum into the resulting array

I: BST - root
O: Array - branchSums

Plan:
  1. DFS
  2. Add up parent nodes
  3. push total branch sum to branchSums array
  4. return branchSums array
*/

const branchSums = (root) => {
  const branchSumsArray = [];

  const totalBranchSum = (node, total) => {
    const sum = total;
    if (node.left === null && node.right === null) {
      branchSumsArray.push(sum);
    }

    if (node.left) {
      totalBranchSum(node.left, sum + node.left.value);
    }

    if (node.right) {
      totalBranchSum(node.right, sum + node.right.value);
    }
  };

  totalBranchSum(root, root.value);
  return branchSumsArray;
};
