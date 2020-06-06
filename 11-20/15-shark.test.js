const shark = require('./15-shark.js');

test('test cases', () => {
    expect( shark(12, 50, 4, 8, true)).toEqual("Alive!");
    expect( shark(7, 55, 4, 16, true)).toEqual("Alive!");
    expect( shark(24, 0, 4, 8, true)).toEqual("Shark Bait!");
});

