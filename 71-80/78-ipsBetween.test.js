const ipsBetween = require('./78-ipsBetween');

describe('Test cases', () => {
    test('Examples', () => {
        expect( ipsBetween("10.0.0.0", "10.0.0.50")).toEqual(50);
        expect( ipsBetween("20.0.0.0", "20.0.1.0")).toEqual(256);
    });
});
