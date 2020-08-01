const noOrder = require('./54-noOrder.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(noOrder("2 + 3- 4*1   ^  3")).toEqual( 1);
        expect(noOrder("7 *  3 - 3/  10  0")).toEqual( 0);
        expect(noOrder("1 20% 0 + 9")).toEqual( null);
        expect(noOrder("6 9* 2+6 /  0")).toEqual( null);        
    })
})