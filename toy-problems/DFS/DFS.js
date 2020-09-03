/* eslint-disable no-unused-vars */
/**
 * given an empty array traverse the tree using DFS and store all of
 * nodes names in the array
 *
 * I: empty array
 * O: array - of all nodes names
 */
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    this.children.forEach((child) => {
      child.depthFirstSearch(array);
    });

    return array;
  }
}
