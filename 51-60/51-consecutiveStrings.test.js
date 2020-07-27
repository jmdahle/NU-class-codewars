const consecutiveStrings = require('./51-consecutiveStrings.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(consecutiveStrings(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toEqual("abigailtheta");
        expect(consecutiveStrings(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toEqual("oocccffuucccjjjkkkjyyyeehh");
        expect(consecutiveStrings([], 3)).toEqual("");
        expect(consecutiveStrings(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)).toEqual("wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
        expect(consecutiveStrings(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)).toEqual("wlwsasphmxxowiaxujylentrklctozmymu");
        expect(consecutiveStrings(["zone", "abigail", "theta", "form", "libe", "zas"], -2)).toEqual("");
        expect(consecutiveStrings(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toEqual("ixoyx3452zzzzzzzzzzzz");
        expect(consecutiveStrings(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)).toEqual("");
        expect(consecutiveStrings(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)).toEqual("");
    });
});

