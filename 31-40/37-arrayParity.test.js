const arrayParity = require('./37-arrayParity');

test('test cases', () => {
    expect( arrayParity([])).toEqual();
    expect( arrayParity([1,-1,2,-2,3])).toEqual(3);
    expect( arrayParity([-3,1,2,3,-1,-4,-2])).toEqual(-4);
    expect( arrayParity([1,-1,2,-2,3,3])).toEqual(3);
    expect( arrayParity([-110,110,-38,-38,-62,62,-38,-38,-38])).toEqual(-38);
    expect( arrayParity([ -9,-105,-9,-9,-9,-9,105])).toEqual(-9);
});