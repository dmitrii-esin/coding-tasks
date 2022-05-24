// // Linked List
// const createNode = (data) => ({
//   next: null,
//   data,
// });

// const insertAfter = (node, data) => {
//   const newNode = createNode(data);
//   newNode.next = node.next;
//   node.next = newNode;
//   return node;
// };

// const insertBefore = (head, data) => {
//   const newHead = createNode(data);
//   newHead.next = head;
//   return newHead;
// };

// // create new list
// let head = createNode("one");

// // insert element after head
// insertAfter(head, "two");

// // insert to head of list
// head = insertBefore(head, "zero");

// const getElementAt = (head, index) => {
//   let currentIndex = 0;
//   let currentNode = head;

//   while (currentIndex < index && currentNode !== null) {
//     currentIndex++;
//     currentNode = currentNode.next;
//   }

//   return currentNode;
// };

// const getElement = (head, data) => {
//   let currentNode = head;

//   while (currentNode.data !== data && currentNode !== null) {
//     currentNode = currentNode.next;
//   }

//   return currentNode;
// };

// const remove = (head, data) => {
//   if (head.data === data) return head.next;

//   let currentNode = head;

//   while (currentNode.next !== null) {
//     if (currentNode.next.data === data) {
//       currentNode.next = currentNode.next.next;
//       return head;
//     }

//     currentNode = currentNode.next;
//   }

//   return head;
// };

// // ********************************

// // Doubled Linked List
// const createNode = (data) => ({
//   next: null,
//   previous: null,
//   data,
// });

// const insertAfter = (node, data) => {
//   const newNode = createNode(data);

//   newNode.next = node.next;
//   newNode.previous = node;
//   node.next && (node.next.previous = newNode);
//   node.next = newNode;

//   return node;
// };

// const insertBefore = (node, data) => {
//   const newNode = createNode(data);

//   newNode.next = node;
//   newNode.previous = node.previous;
//   node.previous && (node.previous.next = newNode);
//   node.previous = newNode;

//   return newNode;
// };

// const removeNode = (node) => {
//   if (!node) return null;

//   node.previous && (node.previous.next = node.next);
//   node.next && (node.next.previous = node.previous);

//   return node;
// };

// const remove = (head, data) => removeNode(getElement(head, data));

// ********************************

// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
// hint 1 - hast table is
// hint 2 - two pointers

// TODO:
// 1. create linked list class
// 2. construct unsorted linked list with duplicates
// 3. remove duplicates

// Solution:

class LinkedList {
  data;
  next = null;
}
