class StringCalculator {
  add(string) {
    let separators = /[,\n]/;
    let result = 0;

    if (string.length < 1) return result;

    //if (string.match(/^\\{2}.\n/)) {

    //}

    this._extractNumbers(string, separators).forEach((number) => {
      result += number;
    });

    return result;
  }
  _extractNumbers(string, separators) {
    return string.split(separators).map(Number);
  }
}

module.exports = StringCalculator;
