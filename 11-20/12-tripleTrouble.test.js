const tripleTrouble = require('./12-tripleTrouble.js');

test('test cases', () => {
    expect( tripleTrouble("this","test","lock")).toEqual("ttlheoiscstk");
    expect( tripleTrouble("aa","bb","cc")).toEqual("abcabc");
    expect( tripleTrouble("Bm", "aa", "tn")).toEqual("Batman");
    expect( tripleTrouble("LLh","euo","xtr")).toEqual("LexLuthor");
});