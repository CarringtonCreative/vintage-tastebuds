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

const isValid = (row, col, board) => {
  const validRow = row >= 0 && row < board.length;
  const validCol = col >= 0 && board[row] && col < board[row].length;
  return validRow && validCol;
};

const isDone = (row, col, board) => {
  console.log("isDone", row, col);

  if (row === undefined || col === undefined) return true;

  const lastRow = row == board.length;
  const lastCol = col == board[row] && board[row].length;

  return lastRow && lastCol;
};

const isRowEnd = (row, col, board) => {
  return col == board[row].length - 1;
};

const getNextMove = (row, col, board) => {
  const valid = isValid(row, col, board);
  const rowEnd = isRowEnd(row, col, board);
  console.log(valid, rowEnd);
  if (valid) {
    if (rowEnd) {
      col = 0;
      row++;
    } else {
      col++;
    }
  }
  return { row, col };
};

const viewBoard = (board) => {
  let output = "\n";
  let row = 0;
  let col = 0;
  let validMove = true;
  while (validMove) {
    const element = board[row][col];
    output += element + " ";
    if (col == board[row].length - 1) {
      output += "\n";
      col = 0;
      row++;
    } else {
      col++;
    }
    validMove = isValid(row, col, board);
  }
  console.log(output);
};

const playGame = (board) => {
  let row = 0;
  let col = 0;
  let done = false;
  let turn = PLAYER.X;
  while (!done) {
    console.log(board);

    if (turn == PLAYER.X) {
      board[row][col] = PLAYER.X;
      turn = PLAYER.O;
    } else if (turn == PLAYER.O) {
      board[row][col] = PLAYER.O;
      turn = PLAYER.X;
    }
    let position = getNextMove(row, col, board);
    row = position.row;
    col = position.col;
    done = isDone(row, col, board);
    console.log(position, done);
  }
  return board;
};

const checkBoard = () => {};

const ticTacToeGame = (board) => {
  let done = false;
};

playGame(BOARD);
viewBoard(BOARD);
