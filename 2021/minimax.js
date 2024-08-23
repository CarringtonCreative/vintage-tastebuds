class BSTNode {
  value;
  left;
  right;
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const minimax = (root) => {
  let turn = 1;
  let node = root;
  let score = null;
  return minimaxHelper(node, turn, score);
};

const minimaxHelper = (node, turn, score) => {
  if (node.left == null && node.right == null) return node.value;
  turn++;
  if (node.left) {
    let value = minimaxHelper(node.left, turn, score);
    score = getPlayerScore(turn, value, score);
  }
  if (node.right) {
    let value = minimaxHelper(node.right, turn, score);
    score = getPlayerScore(turn, value, score);
  }
  node.value = score;
  turn--;
  return score;
};

const getPlayerScore = (turn, value, score) => {
  const minTurn = turn % 2 != 0;
  if (score === null) {
    score = value;
  } else if (minTurn && value < score) {
    // min turn
    score = value;
  } else if (!minTurn && value > score) {
    // max turn
    score = value;
  }
  return score;
};

const root = new BSTNode(
  null,
  new BSTNode(null, new BSTNode(3), new BSTNode(5)),
  new BSTNode(null, new BSTNode(2), new BSTNode(9))
);
const result = minimax(root);
console.log(result);
