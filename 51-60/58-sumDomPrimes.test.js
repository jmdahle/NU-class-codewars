const solve = require('./58-sumDomPrimes.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(solve(0,10)).toEqual(8);
        expect(solve(2,200)).toEqual(1080);
        expect(solve(200,2000)).toEqual(48132);
        expect(solve(500,10000)).toEqual(847039);
        expect(solve(4000,450000)).toEqual(806250440);
        expect(solve(2761,3761)).toEqual(65756);
        expect(solve(1269,2269)).toEqual(38560);
    });
});