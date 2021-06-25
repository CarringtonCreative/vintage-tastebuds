const PLAYER = {
  X: "x",
  O: "o",
};

const BOARD = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "."],
];
// xox -> 1, 1, 1
// xox -> 1, 0, 1
// ooo -> 0, 0, 0

// ooo -> 0, 0, 0
// xox -> 1, 1, 1
// xx. -> 1, 0, 1

// ooo -> 0, 0, 0
// xox -> 1, 1, 1
// xx. -> 1, 0, 1

const isValid = (r, c, board) => {
  const validRow = r >= 0 && r < board.length;
  const validCol = c >= 0 && board[r] && c < board[r].length;
  return validRow && validCol;
};

const isDone = (r, c, board) => {
  if (!r || !c) {
    return true;
  }
  const lastRow = r == board.length;
  const lastCol = c == board[r].length;
  return lastRow && lastCol;
};

const isRowEnd = (row, board) => {
  return row == board[row].length - 1;
};

const getNextMove = (r, c, board) => {
  const valid = isValid(r, c, board);
  const rowEnd = isRowEnd(r, board);
  if (valid) {
    if (rowEnd) {
      r = 0;
      c++;
    } else {
      r++;
    }
  }
  return { row: r, col: c };
};

const viewBoard = (board) => {
  let output = "\n";
  let row = 0;
  let col = 0;
  let validMove = true;
  while (validMove) {
    const element = board[row][col];
    output += element + " ";
    if (row == board[row].length - 1) {
      output += "\n";
      row = 0;
      col++;
    } else {
      row++;
    }
    validMove = isValid(row, col, board);
  }
  console.log(output);
};

const playGame = (board) => {
  let r = 0;
  let c = 0;
  let done = false;
  let turn = PLAYER.X;
  while (!done) {
    if (turn == PLAYER.X) {
      board[r][c] = PLAYER.X;
      turn = PLAYER.O;
    } else if (turn == PLAYER.O) {
      board[r][c] = PLAYER.O;
      turn = PLAYER.X;
    }
    let { row, col } = getNextMove(r, c, board);
    console.log(row, col);
    r = row;
    c = col;
    done = isDone(r, c, board);
  }
  return board;
};

const checkBoard = () => {};

const ticTacToeGame = (board) => {
  let done = false;
};

playGame(BOARD);
viewBoard(BOARD);
