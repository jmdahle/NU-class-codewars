const describeAge = require('./25-describeAge.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(describeAge(64)).toEqual('You\'re a(n) adult');
        expect(describeAge(4)).toEqual('You\'re a(n) kid');
        expect(describeAge(70)).toEqual('You\'re a(n) elderly');
    })
})