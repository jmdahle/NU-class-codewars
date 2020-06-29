const solve = require('./30-uniqueStrings.js');

test('test cases', () => {
    expect( solve('xyab','xzca')).toEqual('ybzc');
    expect( solve("xyabb","xzca")).toEqual("ybbzc");
    expect( solve("pdsoxklegvbqweqkpf","xwsveliaqzfrhymb")).toEqual("pdokgkpiazrhym");
});