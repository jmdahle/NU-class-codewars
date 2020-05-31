const divide = require('./11-watermelon.js');

test('test cases', () => {
    expect( divide(4)).toEqual(true);
    expect( divide(2)).toEqual(false);
    expect( divide(5)).toEqual(false);
    expect( divide(88)).toEqual(true);
    expect( divide(100)).toEqual(true);
    expect( divide(67)).toEqual(false);
    expect( divide(90)).toEqual(true);
    expect( divide(10)).toEqual(true);
    expect( divide(99)).toEqual(false);
    expect( divide(32)).toEqual(true);
});

