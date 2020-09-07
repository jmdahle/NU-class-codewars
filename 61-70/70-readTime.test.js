const solve = require('./70-readTime.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( solve("00:00")).toEqual('midnight');
        expect( solve("00:10")).toEqual('ten minutes past midnight');
        expect( solve("00:15")).toEqual('quarter past midnight');
        expect( solve("00:22")).toEqual('twenty two minutes past midnight');
        expect( solve("00:30")).toEqual('half past midnight');
        expect( solve("00:31")).toEqual('twenty nine minutes to one');
        expect( solve("00:42")).toEqual('eighteen minutes to one');
        expect( solve("00:45")).toEqual('quarter to one');
        expect( solve("00:59")).toEqual('one minute to one');
    });
});



 
 





 
 