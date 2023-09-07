class StringCalculator {
  #separators = ",\n";
  #customSeparatorPattern = /^[/]{2}.\n/;

  add(string) {
    let result = 0;
    let negativeNumbers = [];

    if (string.length < 1) return result;

    if (string.match(this.#customSeparatorPattern)) {
      string = this._extractCustomSeparatorFrom(string);
    }

    const numbers = this._extractNumbers(string);

    numbers.forEach((number) => {
      if (number < 0) {
        negativeNumbers.push(number);
      }
      result += number;
    });

    this._handleAny(negativeNumbers);

    return result;
  }

  _handleAny(negativeNumbers) {
    if (negativeNumbers.length > 0) {
      const errorMessage = `error: negatives not allowed: ${negativeNumbers.toString()}`

      throw new TypeError(errorMessage);
    }
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
