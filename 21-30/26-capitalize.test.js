const capitalize = require('./26-capitalize.js');

describe('Tests', ()=> {
    test('example cases', () => {
        expect( capitalize('abcdef')).toEqual(['AbCdEf', 'aBcDeF']);
    });
});

