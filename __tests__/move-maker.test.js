const validateMove=require("../move-maker")
const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];
validateMove([1, 2], board);

test("returns false if the aray doesn't contain just numbers", () => {
  expect(validateMove([1, "x"], board)).toEqual(false);
  expect(validateMove(["x", 2], board)).toEqual(false);
  expect(validateMove(["1", "2"], board)).toEqual(false);
  expect(validateMove(["", 1], board)).toEqual(false);
  expect(validateMove([1,2],board)).toEqual(true);
});
test("returns false if the array move has more or less than 2 elements", () => {
  expect(validateMove([1], board)).toEqual(false);
  expect(validateMove([1, 2, 3, 8], board)).toEqual(false);
  expect(validateMove([], board)).toEqual(false);
});

test("returns false if the numbers of the array are not in range 1-3 ", () => {
  expect(validateMove([-1, 3], board)).toEqual(false);
  expect(validateMove([-1, -3], board)).toEqual(false);
  expect(validateMove([1, 4], board)).toEqual(false);
});
test("returns false if any row inside the board hasn't got any free space ", () => {
  const board2 = [
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["O", "O", "X"],
  ];
  expect(validateMove([1, 3], board2)).toEqual(false);
  expect(validateMove([1, 3], board2)).toEqual(false);
  expect(validateMove([1, 3], board2)).toEqual(false);
});
test(" verifies if the function allows valid moves in empty spaces", () => {
  expect(validateMove([2, 3],board)).toEqual(true);
  expect(validateMove([1, 3], board)).toEqual(true);
  expect(validateMove([2, 2], board)).toEqual(false);
});

