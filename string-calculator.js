class StringCalculator {
  add(string) {
    var result = 0;

    if (string.length < 1) return result;

    this._extractNumbers(string).forEach((number) => {
      result += number;
    });

    return result;
  }
  _extractNumbers(string) {
    return string.split(/[,\n]/).map(Number);
  }
}

module.exports = StringCalculator;
