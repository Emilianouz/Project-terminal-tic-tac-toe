import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});
test("checkIfNoMovesLeft should return false if there are  moves left", () => {
  const board = [
    ["X", "_", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
test("checkIfNoMovesLeft should return false if the board is completely empty", () => {
  const board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
