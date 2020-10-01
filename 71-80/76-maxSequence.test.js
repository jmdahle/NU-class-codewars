const maxSequence = require('./76-maxSequence');

describe('Test cases', () => {
    test('Examples', () => {
        expect( maxSequence([])).toEqual(0);
        expect( maxSequence([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });
});

describe('Additional cases', () => {
    test('Examples', () => {
        expect( maxSequence([17, -2])).toEqual(17);  // make sure a subarray of a single item is allowed
        expect( maxSequence([50])).toEqual(50);  // make sure an array of a single positive item returns that item's value
        expect( maxSequence([-2])).toEqual(0);  // make sure an array of a single negative item returns 0
        expect( maxSequence([-2, -5, -8])).toEqual(0);  // make sure an array of only negative item returns 0
    });
});
