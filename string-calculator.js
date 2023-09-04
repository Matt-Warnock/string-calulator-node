class StringCalculator {
    add(string) {
        var result;
        
        result = string.length < 1 ? 0 : parseInt(string);

        if(string.match(/\d,\d/)) {
            const firstNumber = parseInt(string[0]);
            const secondNumber = parseInt(string[2]);
            return  firstNumber + secondNumber;
        }

        return result;
    }
}


module.exports = StringCalculator;