const number9 = require('./82-number9');

describe('Test cases', () => {
    test('Examples', () => {
        expect(number9(1)).toEqual( 0);
        expect(number9(9)).toEqual( 1);
        expect(number9(100)).toEqual( 20);
        expect(number9(565754)).toEqual(275645);
    });
});