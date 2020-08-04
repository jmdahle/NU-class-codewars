const total = require('./56-sumPrimeIndexes.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(total([])).toEqual(0);
        expect(total([1,2,3,4])).toEqual(7);
        expect(total([1,2,3,4,5,6])).toEqual(13);
        expect(total([1,2,3,4,5,6,7,8])).toEqual(21);
        expect(total([1,2,3,4,5,6,7,8,9,10,11])).toEqual(21);
        expect(total([1,2,3,4,5,6,7,8,9,10,11,12,13])).toEqual(33);
        expect(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toEqual(47);
    })
})