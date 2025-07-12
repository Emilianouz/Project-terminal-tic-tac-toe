/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  if (board.length > 3) {
    throw new Error("The board cannot have more than 3 rows!");
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i].length > 3) {
      throw new Error(`Row ${i + 1} cannot have more than 3 columns!`);
    }
  }
  for (let row of board) {
    console.log(`${row[0]} | ${row[1]} | ${row[2]}`);
    console.log("~~~~~~~~~~~");
  }
}
const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];

printBoard(board);

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  for (let row of board) {
    if (row.includes("_")) {
      return false;
    }
  }
  return true;
}
