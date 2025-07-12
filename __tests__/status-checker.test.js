import {
  isGameOver,
  checkRow,
  checkColumn,
  checkDiagonal,
  checkIfPlayerWon
} from '../status-checker.js';

describe('checkRow', () => {
  test('returns true when player occupies entire row', () => {
    const board = [
      ['X', 'X', 'X'],
      ['O', '_', '_'],
      ['_', '_', 'O']
    ];
    expect(checkRow(board, 'X', 0)).toBe(true);
  });

  test('returns false when row is not fully occupied by player', () => {
    const board = [
      ['X', 'X', 'O'],
      ['O', '_', '_'],
      ['_', '_', 'O']
    ];
    expect(checkRow(board, 'X', 0)).toBe(false);
  });
});

describe('checkColumn', () => {
  test('returns true when player occupies entire column', () => {
    const board = [
      ['X', 'O', '_'],
      ['X', '_', '_'],
      ['X', '_', '_']
    ];
    expect(checkColumn(board, 'X', 0)).toBe(true);
  });

  test('returns false when column is not fully occupied by player', () => {
    const board = [
      ['X', 'O', '_'],
      ['_', '_', '_'],
      ['X', '_', '_']
    ];
    expect(checkColumn(board, 'X', 0)).toBe(false);
  });
});

describe('checkDiagonal', () => {
  test('returns true for top-left to bottom-right win', () => {
    const board = [
      ['X', '_', '_'],
      ['_', 'X', '_'],
      ['_', '_', 'X']
    ];
    expect(checkDiagonal(board, 'X')).toBe(true);
  });

  test('returns true for top-right to bottom-left win', () => {
    const board = [
      ['_', '_', 'O'],
      ['_', 'O', '_'],
      ['O', '_', '_']
    ];
    expect(checkDiagonal(board, 'O')).toBe(true);
  });

  test('returns false if no diagonal win', () => {
    const board = [
      ['X', '_', '_'],
      ['_', 'O', '_'],
      ['_', '_', 'X']
    ];
    expect(checkDiagonal(board, 'X')).toBe(false);
  });
});

describe('checkIfPlayerWon', () => {
  test('returns true if player has a winning row', () => {
    const board = [
      ['X', 'X', 'X'],
      ['O', '_', '_'],
      ['_', '_', 'O']
    ];
    expect(checkIfPlayerWon(board, 'X')).toBe(true);
  });

  test('returns false if no winning rows, columns, or diagonals', () => {
    const board = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O']
    ];
    expect(checkIfPlayerWon(board, 'X')).toBe(false);
  });
});