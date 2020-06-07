const digitize = require('./16-digitize.js');

test('test cases', () => {
    expect( digitize(12345)).toEqual([5,4,3,2,1]);
    expect( digitize(35231)).toEqual([1,3,2,5,3]);
    expect( digitize(12121)).toEqual([1,2,1,2,1]);
    expect( digitize(456987)).toEqual([7,8,9,6,5,4]);
})