const expressionMatter = require('./06-expressionMatter.js');

test('test cases', () => {
    expect( expressionMatter(2,1,2)).toBe(6);
    expect( expressionMatter(2,1,1)).toBe(4);
    expect( expressionMatter(1,1,1)).toBe(3);
    expect( expressionMatter(1,2,3)).toBe(9);
    expect( expressionMatter(1,3,1)).toBe(5);
    expect( expressionMatter(2,2,2)).toBe(8);
})