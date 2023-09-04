const StringCalculator = require('./string-calculator');

describe('String Calculator', () => {
    it('Returns zero when passed an empty string', () => {
        const stringCalculator = new StringCalculator;
        const result = stringCalculator.add('');

        expect(result).toBe(0);
    })
})