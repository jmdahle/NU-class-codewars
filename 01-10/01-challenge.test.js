const sumStr = require('./01-challenge.js');

test('run test case #1', () => {
    // standard text arguments that are numbers
    expect( sumStr("4","5") ).toBe("9");
});

test('run test case #2', () => {
    // standard text arguments that are numbers
    expect( sumStr("34","5") ).toBe("39");
});

test('run test case #3', () => {
    // standard text arguments with a decimal
    expect( sumStr("4.5", "5") ).toBe("9.5");
});

test('run test case #4', () => {
    // test converting "" to 0
    expect( sumStr("", "5") ).toBe("5");
});

test('run test case #5', () => {
    // test convering non-numeric text to 0
    expect( sumStr( "x", "5") ).toBe("5");
});

test('run test case #6', () => {
    // test two non-numeric arguments
    expect( sumStr( "", "") ).toBe("0");
});