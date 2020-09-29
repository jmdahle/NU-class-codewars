const workOnStrings = require('./77-workOnStrings.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( workOnStrings("abc","cde")).toEqual('abCCde');
        expect( workOnStrings("abcdeFgtrzw","defgGgfhjkwqe")).toEqual('abcDeFGtrzWDEFGgGFhjkWqE');
        expect( workOnStrings("abcdeFg","defgG")).toEqual('abcDEfgDEFGg');
        expect( workOnStrings("abab","bababa")).toEqual('ABABbababa');
        expect( workOnStrings("abc","cde")).toEqual('abCCde');
    });
});
