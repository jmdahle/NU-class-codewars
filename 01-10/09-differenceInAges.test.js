const differenceInAges = require('./09-differenceInAges.js');

test('Test cases', () => {
    expect( differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76]); // us toEqual rather than toBe for arrays
    expect( differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85]);
});