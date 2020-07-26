const multiplyAndFilter = require('./50-multiplyAndFilter.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(multiplyAndFilter([1,2,3,4], 1.5)).toEqual([1.5, 3, 4.5, 6]);
        expect(multiplyAndFilter([1,2,3], 0)).toEqual([0, 0, 0]);
        expect(multiplyAndFilter([0,0,0], 2)).toEqual([0, 0, 0]);
        expect(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3)).toEqual([3,7.5,30]);
    })
})

