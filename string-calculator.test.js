const StringCalculator = require('./string-calculator');

describe('String Calculator', () => {
    const stringCalculator = new StringCalculator;

    it('Returns zero when passed an empty string', () => {
        const result = stringCalculator.add('');

        expect(result).toBe(0);
    })

    it('returns sum of two comma separated numbers', () => {
        const result = stringCalculator.add('1,2')

        expect(result).toBe(3);
    })

    it('returns number if only one given', () => {
        const result = stringCalculator.add('53')

        expect(result).toBe(53);
    })

    it('returns sum of double digit numbers', () => {
        const result = stringCalculator.add('53,21')

        expect(result).toBe(74);
    })

    it('adds unknown amounts of numbers', () => {
        const result = stringCalculator.add('53,2,5,4,2,8,4,9,14')

        expect(result).toBe(101);
    })
})