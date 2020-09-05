const locate = require('./68-locate.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( locate(['a','b',['c','d',['e']]],'a')).toEqual(true);
        expect( locate(['a','b',['c','d',['e']]],'e')).toEqual(true);
        expect( locate(['a','b',['c','d',['e']]],'f')).toEqual(false);
    });
});
