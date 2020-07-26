const catchSignChange = require('./41-catchSignChange.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(catchSignChange([1, 3, 4, 5])).toEqual(0);
        expect(catchSignChange([1, -3, -4, 0, 5])).toEqual(2);
        expect(catchSignChange([])).toEqual(0);
        expect(catchSignChange([-47,84,-30,-11,-5,74,77])).toEqual(3);
    });
});

