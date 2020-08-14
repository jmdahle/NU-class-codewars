const fizzBuzzCustom = require('./63-fizzBuzz.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( fizzBuzzCustom()[15]).toEqual(16);
        expect( fizzBuzzCustom()[44]).toEqual('FizzBuzz');
        expect( fizzBuzzCustom('Hey', 'There')[25]).toEqual(26);
        expect( fizzBuzzCustom('Hey', 'There')[11]).toEqual('Hey');
        expect( fizzBuzzCustom("What's ", "up?", 3, 7)[80]).toEqual('What\'s ');
    });
});
