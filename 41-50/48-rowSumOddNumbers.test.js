const rowSumOddNumbers = require('./48-rowSumOddNumbers.js');

describe('test cases', () => {
    test('examples', () => {
        expect( rowSumOddNumbers(1)).toEqual(1);
        expect( rowSumOddNumbers(2)).toEqual(8);
        expect( rowSumOddNumbers(3)).toEqual(27);
        expect( rowSumOddNumbers(4)).toEqual(64);
    });
});