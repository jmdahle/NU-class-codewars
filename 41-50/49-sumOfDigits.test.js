const sumOfDigits = require('./49-sumOfDigits.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( sumOfDigits(123)).toEqual(6);
        expect( sumOfDigits(1234)).toEqual(10);
        expect( sumOfDigits(9909)).toEqual(27);
    });
});
