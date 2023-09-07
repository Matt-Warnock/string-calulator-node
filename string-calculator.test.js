const StringCalculator = require("./string-calculator");

describe("String Calculator", () => {
  const stringCalculator = new StringCalculator();

  it("Returns zero when passed an empty string", () => {
    const result = stringCalculator.add("");

    expect(result).toBe(0);
  });

  it("returns sum of two comma separated numbers", () => {
    const result = stringCalculator.add("1,2");

    expect(result).toBe(3);
  });

  it("returns number if only one given", () => {
    const result = stringCalculator.add("53");

    expect(result).toBe(53);
  });

  it("returns sum of double digit numbers", () => {
    const result = stringCalculator.add("53,21");

    expect(result).toBe(74);
  });

  it("adds unknown amounts of numbers", () => {
    const result = stringCalculator.add("53,2,5,4,2,8,4,9,14");

    expect(result).toBe(101);
  });

  it("Returns sum of newline and comma separated numbers", () => {
    const result = stringCalculator.add("3\n4,10");

    expect(result).toBe(17);
  });

  it("Separates numbers with custom separator", () => {
    const result = stringCalculator.add("//;\n1;2");

    expect(result).toBe(3);
  });

  describe("when passing any negative numbers", () => {
    const negativeNumber = -2;

    it("Throws an exception", () => {
      expect(addWithNegative).toThrow(TypeError);
    });

    it("The exception describes the number in error", () => {
      expect(addWithNegative).toThrow(
        `error: negatives not allowed: ${negativeNumber}`
      );
    });

    it("The exception describes multiple numbers in error", () => {
      const secondNegativeNumber = -1;

      const result = () => {
        stringCalculator.add(`2,${negativeNumber},${secondNegativeNumber}`);
      };

      expect(result).toThrow(
        `error: negatives not allowed: ${negativeNumber},${secondNegativeNumber}`
      );
    });

    const addWithNegative = () => {
      stringCalculator.add(`1,${negativeNumber}`);
    };
  });
});
