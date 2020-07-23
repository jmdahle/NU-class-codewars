const longestVowelSubstring = require('./43-longestVowel.js');

describe('Test cases', () => {
    test('examples', () => {
        expect( longestVowelSubstring('codewarriors')).toEqual(2);
        expect( longestVowelSubstring('uivuivuivuieveveeos')).toEqual(3);
    })
})