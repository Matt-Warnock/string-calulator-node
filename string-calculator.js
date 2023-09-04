class StringCalculator {
    add(string) {
        if(string.length < 1) {
            return 0;
        }
        if(string.match(/\d,\d/)) {
            const firstNumber = parseInt(string[0]);
            const secondNumber = parseInt(string[2]);
            return  firstNumber + secondNumber;
        }

        if(!string.match(/,/)) {
            return parseInt(string);
        }
    }
}


module.exports = StringCalculator;