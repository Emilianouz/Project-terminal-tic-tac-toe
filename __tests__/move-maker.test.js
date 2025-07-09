const validateMove=require("../move-maker.js")


test("returns false if the aray doesn't contain just numbers",()=>{
    expect(validateMove([1,"x"])).toEqual(false)
})