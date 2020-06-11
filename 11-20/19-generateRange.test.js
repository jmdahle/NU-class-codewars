const generateRange = require('./19-generateRange.js');

test('test cases', () => {
    expect( generateRange(2,10,2)).toEqual([2,4,6,8,10]);
    expect( generateRange(2,11,2)).toEqual([2,4,6,8,10]);
    expect( generateRange(1,11,2)).toEqual([1,3,5,7,9,11]);

});