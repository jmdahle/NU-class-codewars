const orderedCount = require('./40-orderedCount.js');

describe('Test cases', () => {
    test('examples', () => {
        expect(orderedCount("abracadabra")).toEqual([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
        expect(orderedCount("Code Wars")).toEqual( [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);
        expect(orderedCount("233312")).toEqual([['2', 2], ['3', 3], ['1', 1 ]]);        
    })
})

    