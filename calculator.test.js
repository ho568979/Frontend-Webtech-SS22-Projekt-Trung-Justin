const calculator = require("./calculator");

test("should know 1+1", () => {
    let expected = 2;
    let actual = calculator.add(1, 1);
    expect(expected).toBe(actual);
})