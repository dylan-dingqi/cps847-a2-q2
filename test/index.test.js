
const lib = require("../index.js");

test("absolute test", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
})