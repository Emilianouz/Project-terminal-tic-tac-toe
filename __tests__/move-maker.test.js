const validateMove=require("../move-maker.js")


test("returns false if the aray doesn't contain just numbers",()=>{
    expect(validateMove([1,"x"])).toEqual(false);
    expect(validateMove(["x", 2])).toEqual(false);
    expect(validateMove(["1", "2"])).toEqual(false);
    expect(validateMove(["", 1])).toEqual(false);
});
test("returns false if the array has more or less than 2 elements",()=>{
    expect(validateMove([1])).toEqual(false);
    expect(validateMove([1, 2,3,8])).toEqual(false);
    expect(validateMove([])).toEqual(false);
});