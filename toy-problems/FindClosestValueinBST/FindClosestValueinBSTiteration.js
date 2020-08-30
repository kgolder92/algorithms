/* eslint-disable no-unused-vars */
/*
given a BST and a target number find the number that is
closest to the target number in the BST

I: BST - tree, Number - target
O: Number - closest value to target
E: -
C: -

Worstcase: O(n) time | O(1) space where n is thr number of nodes in the BST
*/
const findClosestValueInBst = (tree, target) => {
  let closest = tree.value;
  let current = tree;

  while (current !== null) {
    // 12 - 10 = 2 < 12 - 10 = 2 -> no
    // 12 - 15 = 3 < 12 - 10 = 2 -> no
    // 12 - 13 = 1 < 12 - 10 = 2 -> yes so closest = 13
    // 12 - 14 = 2 < 12 - 13 = 1 -> no
    if (Math.abs(target - current.value) < Math.abs(target - closest)) {
      closest = current.value;
    }

    if (target > current.value) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  return closest;
};

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
