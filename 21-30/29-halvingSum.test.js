const halvingSum = require('./29-halvingSum.js');

test('test cases', () => {
    expect( halvingSum(25)).toEqual(47);
    expect( halvingSum(127)).toEqual(247);
});