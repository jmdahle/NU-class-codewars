const duplicateCount = require('./53-duplicateCount.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(duplicateCount('abcac')).toEqual(2)
        expect(duplicateCount("")).toEqual(0);
        expect(duplicateCount("abcde")).toEqual(0);
        expect(duplicateCount("aabbcde")).toEqual(2);
        expect(duplicateCount("aabBcde")).toEqual(2);
        expect(duplicateCount("Indivisibility")).toEqual(1)
        expect(duplicateCount("Indivisibilities")).toEqual(2);
    })
})

