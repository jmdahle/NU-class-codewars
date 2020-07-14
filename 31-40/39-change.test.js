const change = require('./39-change.js');

test('Return a 1 in first position for "a"', () => {
        expect ( change('a') ).toEqual('10000000000000000000000000');
});

test('Return a 1 in the first position for "A"', () => {
    expect ( change('A') ).toEqual('10000000000000000000000000');
});

test('Return a 1 in the first and last position for "az"', () => {
    expect ( change('az') ).toEqual('10000000000000000000000001');
});

test('Return a 1 in the first and last position for "a? z-"', () => {
    expect ( change('a? z-') ).toEqual('10000000000000000000000001');
});