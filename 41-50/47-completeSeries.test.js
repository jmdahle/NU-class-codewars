const completeSeries = require('./47-completeSeries.js');

describe('Test cases', () => {
    test('example cases', () => {
        expect( completeSeries([1,2,3])).toEqual([0,1,2,3]);
        expect( completeSeries([1,2,2])).toEqual([0]);
        expect( completeSeries([1,2,6])).toEqual([0,1,2,3,4,5,6]);
        expect( completeSeries([1,5,3])).toEqual([0,1,2,3,4,5]);
        expect( completeSeries([1,3])).toEqual([0,1,2,3]);
        expect( completeSeries([1,1,3])).toEqual([0]);
    })
})