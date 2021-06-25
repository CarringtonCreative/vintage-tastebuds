/**
 * Problem:
 *  Print Binary Search Tree Level Wise
 * Description:
 *  Print the nodes in a binary tree level-wise. For example, the following
 *  should print 1, 2, 3, 4, 5.
 * Approach:
 *  Perform a BFS on tree and print out the nodes value at each level
 * Complexity:
 *  Time => O(n) Iterate through the whole tree
 *  Space => O(n) Store each node in the tree
 *
 * Comments:
 *
 * @param {object} object Root node of the BST
 * @return {null}
 */

class Node {
  value;
  left;
  right;

  constructor(value, left, right) {
    this.value = value || -1;
    this.left = left || null;
    this.right = right || null;
  }
}

const printBSTLevelWise = (root) => {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    console.log(node.value);
  }
};

const printBSTLevelWiseOptimal = (root) => {
  let i = 1;
  let node = root;
  const nodes = [];
  nodes.push(node);
  while (node) {
    if (node.left) {
      nodes.push(node.left);
    }
    if (node.right) {
      nodes.push(node.right);
    }
    node = nodes[i];
    i++;
  }
  nodes.map((v) => console.log(v.value));
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

printBSTLevelWise(root);
printBSTLevelWiseOptimal(root);
