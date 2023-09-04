class StringCalculator {
    add(string) {
        var result;
        
        result = string.length < 1 ? 0 : parseInt(string);

        if(string.match(/,/)) {
            const numbers = string.split(/,/)
                                  .map(number => parseInt(number))
            const firstNumber = numbers[0];
            const secondNumber = numbers[1];
            return  firstNumber + secondNumber;
        }

        return result;
    }
}


module.exports = StringCalculator;