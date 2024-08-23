class Node {
  value;
  left;
  right;

  constructor(value, left, right) {
    this.value = value || null;
    this.left = left || null;
    this.right = right || null;
  }
}

const deserializeTree = (serialized) => {
  let root = new Node(serialized.charAt(0));
  let element = root;
  for (let i = 1; i < serialized.length; i++) {
    const leftChildIndex = i + 2 * 1;
    const rightChildIndex = i + 2 * 2;
    if (leftChildIndex < serialized.length) {
      const leftChildVal = serialized.charAt(leftChildIndex);
      const leftChildElement = new Node(leftChildVal);
      element.left = leftChildElement;
    }

    if (rightChildIndex < serialized.length) {
      const rightChildVal = serialized.charAt(rightChildIndex);
      const rightChildElement = new Node(rightChildVal);
      element.right = rightChildElement;
    }
  }
  return root;
};

const convertTreeToQueue = (tree) => {
  let index = 1;
  let element = tree;
  const queue = [];
  while (element) {
    // BUG: Infinite Loop
    queue.push(element);
    if (element.value != EMPTY_CHILD) {
      console.log(element.value);
      const left = element.left;
      const right = element.right;
      if (left) queue.push(left);
      else queue.push(new Node(EMPTY_CHILD));
      if (right) queue.push(right);
      else queue.push(new Node(EMPTY_CHILD));
      //element = queue[index++];
    }
  }
  console.log(queue);
  return queue;
};

const serializeTree = (tree) => {
  const queue = convertTreeToQueue(tree);
  let serialized = "";
  for (let element of queue) {
    serialized += element.value;
  }
  return serialized;
};

const EMPTY_CHILD = -1;
const root = new Node(
  1,
  new Node(3, new Node(2), new Node(5)),
  new Node(4, new Node(7))
);

const serialized = serializeTree(root);
console.log(serialized);
// const deserialized = deserializeTree(root);
// console.log(deserialized);
