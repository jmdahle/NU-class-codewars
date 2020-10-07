const validISBN10 = require('./81-isbn10');

const sampleTests = [
    ["1112223339", true ],
    ["048665088X", true ],
    ["1293000000", true ],
    ["1234554321", true ],
    ["1234512345", false],
    ["1293"      , false],
    ["X123456788", false],
    ["ABCDEFGHIJ", false],
    ["XXXXXXXXXX", false]
]
describe('Test cases', () => {
    test('Examples', () => {
        for (let i=0; i<sampleTests.length; i++) {
            expect(validISBN10(sampleTests[i][0])).toEqual(sampleTests[i][1]);
        }
    });
});

