/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const Node = (val) => ({ val, next: null });

const head = Node(1);
head.next = Node(2);
head.next.next = Node(3);
head.next.next.next = Node(4);
head.next.next.next.next = Node(5);
head.next.next.next.next.next = Node(6);

const middleNode = (node) => {
  let slowPtr = node;
  let fastPtr = node.next;
  while (fastPtr) {
    slowPtr = slowPtr.next;
    if (fastPtr.next) {
      fastPtr = fastPtr.next.next;
    } else {
      fastPtr = fastPtr.next;
    }
  }
  return slowPtr;
};
console.log(middleNode(head));
// => should be starting at 4 since there are two middles take the second
