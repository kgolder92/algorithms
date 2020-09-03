/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const findClosestValueInBst = (tree, target) => {
  const inner = (newTree, targetVal, closest) => {
    if (newTree === null) {
      return closest;
    }

    // 12 - 10 = 2 > 12 - 10 = 2 no move on closest is still 10
    // 12 - 10 = 2 > 12 - 15 = 3 no move on closest is still 10
    // 12 - 10 = 2 > 12 - 13 = 1 yes so closest is now 13
    // 12 - 13 = 1 > 12 - 14 = 2 no move on closest is still 13
    if (Math.abs(targetVal - closest) > Math.abs(targetVal - newTree.value)) {
      closest = newTree.value;
    }

    if (targetVal < newTree.value) {
      inner(newTree.left, targetVal, closest);
    } else if (targetVal > newTree.value) {
      inner(newTree.right, targetVal, closest);
    }
    return closest;
  };

  return inner(tree, target, tree.value);
};

// This is the class of the input tree.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
