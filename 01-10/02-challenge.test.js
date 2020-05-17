const countSheep = require('./02-challenge.js');

test('run test case #1', () => {
    // standard text arguments that are numbers
    expect( countSheep(1) ).toBe("1 sheep...");
});

test('run test case #2', () => {
    // standard text arguments that are numbers
    expect( countSheep(2) ).toBe("1 sheep...2 sheep...");
});

test('run test case #3', () => {
    // standard text arguments that are numbers
    expect( countSheep(3) ).toBe("1 sheep...2 sheep...3 sheep...");
});
