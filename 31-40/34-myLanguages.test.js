const myLanguages = require('./34-myLanguages.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})).toEqual(["Ruby", "Python"]);
        expect(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})).toEqual(["Dutch", "Greek", "Hindi"]);
        expect(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})).toEqual([]);
    });
});