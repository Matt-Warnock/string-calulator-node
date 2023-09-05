class StringCalculator {
  add(string) {
    let separators = ",\n";
    let result = 0;

    if (string.length < 1) return result;

    if (string.match(/^[/]{2}.\n/)) {
      separators += string[2];
      string = string.slice(4);
    }

    this._extractNumbers(string, separators).forEach((number) => {
      result += number;
    });

    return result;
  }
  _extractNumbers(string, separators) {
    const regex = new RegExp(`[${separators}]`, "i");

    return string.split(regex).map(Number);
  }
}

module.exports = StringCalculator;
