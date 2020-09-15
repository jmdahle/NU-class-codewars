const nthFibo = require('./74-nthFibo.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( nthFibo(5)).toEqual(3);
        expect( nthFibo(9)).toEqual(21);
        expect( nthFibo(11)).toEqual(55);
        expect( nthFibo(14)).toEqual(233);
        expect( nthFibo(15)).toEqual(377);
    });
});
