const letterCount = require('./75-letterCount');

describe('Test cases', () => {
    test('Examples', () => {
        expect(letterCount("codewars")).toEqual( {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
        expect(letterCount("activity")).toEqual( {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
        expect(letterCount("arithmetics")).toEqual( {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
        expect(letterCount("traveller")).toEqual( {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
        expect(letterCount("daydreamer")).toEqual( {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});
    });
});

