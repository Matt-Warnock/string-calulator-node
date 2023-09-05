class StringCalculator {
  #separators = ",\n";
  #customSeparatorPattern = /^[/]{2}.\n/;

  add(string) {
    let result = 0;

    if (string.length < 1) return result;

    if (string.match(this.#customSeparatorPattern)) {
      string = this._extractCustomSeparatorFrom(string);
    }

    this._extractNumbers(string).forEach((number) => {
      result += number;
    });

    return result;
  }

  _extractCustomSeparatorFrom(string) {
    this.#separators += string[2];

    return string.slice(4);
  }

  _extractNumbers(string) {
    const regex = this._generateRegex();

    return string.split(regex).map(Number);
  }

  _generateRegex() {
    return new RegExp(`[${this.#separators}]`, "i");
  }
}

module.exports = StringCalculator;
