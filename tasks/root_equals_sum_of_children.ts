//  You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
//  Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

//  Example 1:
//  Input: root = [10,4,6]
//  Output: true
//  Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
//  10 is equal to 4 + 6, so we return true.

//  Example 2:
//  Input: root = [5,3,1]
//  Output: false
//  Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
//  5 is not equal to 3 + 1, so we return false.

//  Constraints:
//  The tree consists only of the root, its left child, and its right child.
//  -100 <= Node.val <= 10

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function checkTree(root: TreeNode | null): boolean {
  if (!root) return false;

  return (root?.left?.val || 0) + (root?.right?.val || 0) === root.val;
}

const tree1 = {
  val: 10,
  left: {
    val: 6,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};

const tree2 = {
  val: 5,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: null,
  },
};

console.log("!!checkTree(tree1)", checkTree(tree1)); // true
console.log("!!checkTree(tree2)", checkTree(tree2)); // false
