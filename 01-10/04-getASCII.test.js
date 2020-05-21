const getASCII = require('./04-getASCII.js');

test('test cases', () => {
    expect( getASCII('A')).toBe(65);
    expect( getASCII(' ')).toBe(32);
    expect( getASCII('!')).toBe(33);
});