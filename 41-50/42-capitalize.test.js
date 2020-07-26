const capitalize = require('./42-capitalize.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(capitalize('burger',[0,3])).toEqual('BurGer');
        expect(capitalize("abcdef",[1,2,5])).toEqual("aBCdeF");
        expect(capitalize("abcdef",[1,2,5,100])).toEqual("aBCdeF");
        expect(capitalize("codewars",[1,3,5,50])).toEqual('cOdEwArs');
        expect(capitalize("abracadabra",[2,6,9,10])).toEqual('abRacaDabRA');
        expect(capitalize("codewarriors",[5])).toEqual('codewArriors');
        expect(capitalize("indexinglessons",[0])).toEqual('Indexinglessons');    })
})

