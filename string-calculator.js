class StringCalculator {
    add(string) {
        var result;
        
        result = string.length < 1 ? 0 : parseInt(string);

        if(string.match(/,/)) {
            const numbers = string.split(/,/)
                                  .map(Number);
            
            let sum = 0;
            numbers.forEach(number => {
                sum += number;
            });

            return sum;
        }

        return result;
    }
}


module.exports = StringCalculator;