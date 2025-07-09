const validateMove = require("../move-maker.js");
const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];
validateMove([1, 2], board);
  

test("returns false if the aray doesn't contain just numbers", () => {
  expect(validateMove([1, "x"],board)).toEqual(false);
  expect(validateMove(["x", 2],board)).toEqual(false);
  expect(validateMove(["1", "2"],board)).toEqual(false);
  expect(validateMove(["", 1],board)).toEqual(false);
});
test("returns false if the array has more or less than 2 elements", () => {
  expect(validateMove([1],board)).toEqual(false);
  expect(validateMove([1, 2, 3, 8],board)).toEqual(false);
  expect(validateMove([],board)).toEqual(false);
});
test("returns false if the numbers of the array are sequential ", () => {
  expect(validateMove([3, 2, 1],board)).toEqual(false);
  expect(validateMove([1, 2, 3],board)).toEqual(false);
});

test("returns false if the numbers of the array are not in range 1-3 ", () => {
  expect(validateMove([-1, 3],board)).toEqual(false);
  expect(validateMove([-1, -3],board)).toEqual(false);
  expect(validateMove([1, 4],board)).toEqual(false);
});
test("returns false if any row inside the board hasn't got any free space ", () => {
    expect(validateMove([1, 3],[['X','X','X']])).toEqual(false);
    expect(validateMove([1, 3], [["O", "O", "O"]])).toEqual(false);
    expect(validateMove([1, 3], [["O", "X", "X"]])).toEqual(false);
});
  