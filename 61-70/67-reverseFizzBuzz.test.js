const reverseFizzBuzz = require('./67-reverseFizzBuzz.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect( reverseFizzBuzz("1 2 Fizz 4 Buzz")).toEqual([1, 2, 3, 4, 5]);
        expect(reverseFizzBuzz("Fizz 688 689 FizzBuzz")).toEqual([687, 688, 689, 690]);
        expect(reverseFizzBuzz("Fizz Buzz")).toEqual([9, 10]);
    });
});
