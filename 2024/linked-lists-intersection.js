/* 

  Problem: Given the heads of two singly linked-lists headA and headB, 
  return the node at which the two lists intersect. If the two linked 
  lists have no intersection at all, return null.

  Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
  Output: Intersected at '8'

  Approach 1:

  Start at list A head
  - Iterate until intersection node N found
  - Determine if current node is the intersection node
    - Check node's value, next, and address
  Start at list B head
  - Iterate until intersection node N found 

  Note: Intersection node N exists in memory at the same place for both lists

  Approach 2:

  - Start at list A head
  - Iterate through list A and store nodes in memory (HashMap)
    - If duplicate values store nodes in bucket
  - Start at list B head
  - Iterate through list B
    - Compare list B node with node values in Hash Map
      - Iterate through nodes in hash buckets 
      - Determine if an intersection node (compare addresses, value, and next)

  Time O(n) + O(m) where n and m are the length of linked 
  list A and B respectively

*/

class LinkedListNode {
  value;
  next;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }
}

class LinkedListIntersection {
  headA;
  headB;

  constructor(headA, headB) {
    this.headA = headA;
    this.headB = headB;
  }

  preprocess(head) {
    const map = {};
    let node = head;
    while (node) {
      if (map[node.value] == undefined) {
        map[node.value] = [];
      }
      map[node.value].push(node);
      node = node.next;
    }
    return map;
  }

  solve() {
    const map = this.preprocess(this.headA);
    let nodeB = this.headB;
    while (nodeB) {
      let bucket = map[nodeB.value];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          let nodeA = bucket[i];
          let found = this.isIntersection(nodeA, nodeB);
          if (found) {
            return nodeA;
          }
        }
      }
      nodeB = nodeB.next;
    }
    return null;
  }

  isIntersection(nodeA, nodeB) {
    return (
      nodeA === nodeB && nodeA.value === nodeB.value && nodeA.next == nodeB.next
    );
  }
}

const example1 = () => {
  let intersection = new LinkedListNode(
    8,
    new LinkedListNode(4, new LinkedListNode(5, null))
  );

  let headA = new LinkedListNode(4, new LinkedListNode(1, intersection));
  let headB = new LinkedListNode(
    5,
    new LinkedListNode(6, new LinkedListNode(1, intersection))
  );

  let solution = new LinkedListIntersection(headA, headB);
  let result = solution.solve();
  console.log(result);
};

const example2 = () => {
  let intersection = new LinkedListNode(2, new LinkedListNode(4, null));

  let headA = new LinkedListNode(
    1,
    new LinkedListNode(9, new LinkedListNode(1, intersection))
  );

  let headB = new LinkedListNode(3, intersection);
  let solution = new LinkedListIntersection(headA, headB);
  let result = solution.solve();
  console.log(result);
};

const example3 = () => {
  let headA = new LinkedListNode(
    2,
    new LinkedListNode(6, new LinkedListNode(4, null))
  );

  let headB = new LinkedListNode(1, new LinkedListNode(5, null));
  let solution = new LinkedListIntersection(headA, headB);
  let result = solution.solve();
  console.log(result);
};

example1();
example2();
example3();
