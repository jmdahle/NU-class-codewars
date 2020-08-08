const largestPairSum = require('./27-largestPair.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(largestPairSum([10, 14, 2, 23, 19])).toEqual(42);
        expect(largestPairSum([99, 2, 2, 23, 19] )).toEqual(122);
        expect(largestPairSum([-10, -8, -16, -18, -19])).toEqual(-18);
    });
});