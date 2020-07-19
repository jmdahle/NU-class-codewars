const initialsCase = require('./45-initialsCase.js');

describe('Test Cases', () => {
    test('example cases', () => {
        expect(initialsCase('code wars')).toEqual('C.Wars');
        expect(initialsCase('Barrack Hussein obama')).toEqual('B.H.Obama');
    });
});
