/**
 * Problem:
 *   Ternary Search Tree
 * Description:
 *  A ternary search tree is a trie-like data structure where each node may
 *  have up to three children. Here is an example which represents the words
 *  code, cob, be, ax, war, and we.
 * Approach:
 *  The tree is structured according to the following rules:
 *  left child nodes link to words lexicographically earlier than the
 *  parent prefix
 *  right child nodes link to words lexicographically later than the
 *  parent prefix
 *  middle child nodes continue the current word
 *  For instance, since code is the first word inserted in the tree, and cob
 *  lexicographically precedes cod, cob is represented as a left child
 *  extending from cod.
 * Implement insertion and search functions for a ternary search tree.
 * Complexity:
 *  Time => O(n) Insert and search algorithms are in worst case linear time
 *  Space => O(n) Storing a copy of the tree in memory
 *
 * Comments:
 *
 * @param {object} object Class representing the Trie data structure
 * @param {object} object Class representing the Ternary Search Tree data structure
 * @return {}
 */

class Trie {
  left;
  center;
  right;
  constructor(value, left, center, right) {
    this.value = value || -1;
    this.left = left || null;
    this.center = center || null;
    this.right = right || null;
  }
}

class TernarySearchTree {
  root;
  constructor(root) {
    this.root = root || null;
  }

  insert(word) {
    let i = 0;
    let c = word.charAt(i);
    let node = this.root;
    let parent = null;
    while (i < word.length) {
      if (node == null) {
        while (i < word.length) {
          let w = word.charAt(i);
          node = new Trie(w);
          parent.center = node;
          parent = node;
          i++;
        }
      } else {
        const { value } = node;
        if (c > value) {
          // c lexicographically is after value
          node = node.right;
        } else if (c < value) {
          // c lexicographically is before value
          node = node.left;
        } else if (c === value) {
          // c is equal to value
          i++;
          c = word.charAt(i);
          node = node.center;
        }
      }
    }
    return true;
  }

  search(word) {
    let i = 0;
    let w = word.charAt(i);
    let node = this.root;
    while (node) {
      const { value } = node;
      if (w > value) {
        // w lexicographically is after value
        node = node.right;
      } else if (w < value) {
        // w lexicographically is before value
        node = node.left;
      } else if (w === value) {
        // w is equal to value
        i++;
        w = word.charAt(i);
        node = node.center;
      }
    }
    return i == word.length;
  }
}

const root = new Trie("c");
root.center = new Trie("o");
root.center.center = new Trie("d");
root.center.center.center = new Trie("e");
root.center.center.left = new Trie("b");

root.right = new Trie("w");
root.right.center = new Trie("a");
root.right.center.center = new Trie("r");
root.right.center.right = new Trie("e");

root.left = new Trie("b");
root.left.center = new Trie("e");
root.left.left = new Trie("a");
root.left.left.center = new Trie("x");

const tree = new TernarySearchTree(root);
const found = tree.search("a");
console.log(found);
