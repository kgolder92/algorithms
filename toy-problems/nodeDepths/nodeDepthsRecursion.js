/* eslint-disable no-unused-vars */
/* given a Binary tree find out and return the sum of the nodes depth
I: Binary Tree - root
O: Number - Node Depth

1. f(root, depth) = depth + f(root.left, depth + 1) +
    f(root.right, depth + 1);
*/

const nodeDepths = (root, depthCounter = 0) => {
  if (root === null) return 0;

  return depthCounter + nodeDepths(root.left, depthCounter + 1)
  + nodeDepths(root.right, depthCounter + 1);
};

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
