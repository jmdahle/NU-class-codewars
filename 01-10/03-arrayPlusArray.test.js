const arrayPlusArray = require('./03-challenge.js');

// test from codewars
test ('tests for arrayPlusArray from codewars', () => {
    expect( arrayPlusArray([1, 2, 3], [4, 5, 6]) ).toBe(21);
    expect( arrayPlusArray([-1, -2, -3], [-4, -5, -6] )).toBe(-21);
    expect( arrayPlusArray([0, 0, 0], [4, 5, 6]) ).toBe(15);
    expect( arrayPlusArray([100, 200, 300], [400, 500, 600]) ).toBe(2100);
});

