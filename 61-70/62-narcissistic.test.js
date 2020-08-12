const narcissistic = require('./62-narcissistic.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( narcissistic(7)).toBe(true);
        expect( narcissistic(371)).toBe(true);
        expect( narcissistic(153)).toBe(true);
        expect( narcissistic(1634)).toBe(true);
    });
});
