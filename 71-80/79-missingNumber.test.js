const missingNumber = require('./79-missingNumber');

describe('Test cases', () => {
    test('Examples', () => {
        expect(missingNumber("123567")).toEqual(4);
        expect(missingNumber("899091939495")).toEqual(92);
        expect(missingNumber("9899101102")).toEqual(100);
        expect(missingNumber("599600601602")).toEqual(-1);
        expect(missingNumber("8990919395")).toEqual(-1);
        expect(missingNumber("998999100010011003")).toEqual(1002);
        expect(missingNumber("99991000110002")).toEqual(10000);
        expect(missingNumber("979899100101102")).toEqual(-1);
        expect(missingNumber("900001900002900004900005900006")).toEqual(900003);
        expect(missingNumber("01234678910111213")).toEqual(5); // an example with a leading 0
    });
});

