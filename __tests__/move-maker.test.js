const validateMove = require("../move-maker.js");

test("returns false if the aray doesn't contain just numbers", () => {
  expect(validateMove([1, "x"])).toEqual(false);
  expect(validateMove(["x", 2])).toEqual(false);
  expect(validateMove(["1", "2"])).toEqual(false);
  expect(validateMove(["", 1])).toEqual(false);
});
test("returns false if the array has more or less than 2 elements", () => {
  expect(validateMove([1])).toEqual(false);
  expect(validateMove([1, 2, 3, 8])).toEqual(false);
  expect(validateMove([])).toEqual(false);
});
test("returns false if the numbers of the array are sequential ", () => {
  expect(validateMove([3, 2, 1])).toEqual(false);
  expect(validateMove([1, 2, 3])).toEqual(false);
});

test("returns false if the numbers of the array are not in range 1-3 ", () => {
  expect(validateMove([-1, 3])).toEqual(false);
  expect(validateMove([-1, -3])).toEqual(false);
  expect(validateMove([1, 4])).toEqual(false);
});
  