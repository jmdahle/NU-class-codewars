const twoSort = require('./23-twoSort.js');


test('Test cases', () => {
    expect( twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])).toEqual('b***i***t***c***o***i***n');
    expect( twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])).toEqual('a***r***e');
});
