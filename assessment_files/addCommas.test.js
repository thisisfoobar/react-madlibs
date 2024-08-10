const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it returns a string value", () => {
    const res = addCommas(123)
    expect(typeof res).toBe("string")
  })

  test("it does NOT add commas", () => {
    const res = addCommas(123)
    expect(res).not.toContain(",")
  })

  test("it adds commas to number", () => {
    const res = addCommas(12345)
    expect(res).toContain(",")
    expect(typeof res).toBe("string")
    expect(res).toEqual("12,345")
  })
});
