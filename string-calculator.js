class StringCalculator {
  add(string) {
    var result = 0;

    if (string.length < 1) return result;

    const numbers = string
      .split(/,/)
      .map(Number)
      .forEach((number) => {
        result += number;
      });

    return result;
  }
}

module.exports = StringCalculator;
