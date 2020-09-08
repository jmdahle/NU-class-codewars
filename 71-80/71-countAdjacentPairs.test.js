const countAdjacentPairs = require('./71-countAdjacentPairs.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(countAdjacentPairs('')).toEqual( 0); 
        expect(countAdjacentPairs('orange Orange kiwi pineapple apple')).toEqual( 1); 
        expect(countAdjacentPairs('banana banana banana')).toEqual( 1); 
        expect(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')).toEqual( 2)
        expect(countAdjacentPairs('pineapple apple')).toEqual( 0); 
        expect( countAdjacentPairs("dog      dog dog dog cat cat banana cat banana")).toEqual(2);
    });
});

