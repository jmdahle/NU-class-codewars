const divisibleByThree = require('./32-divisibleByThree.js');

test('test cases', () => {
    expect( divisibleByThree('123')).toEqual(true);
    expect( divisibleByThree('19254')).toEqual(true);
    expect( divisibleByThree('88')).toEqual(false);
    expect( divisibleByThree('1')).toEqual(false);
});