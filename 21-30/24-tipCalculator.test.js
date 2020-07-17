const tipCalculator = require('./24-tipCalculator.js');

test('test cases', () => {
       expect( tipCalculator(20, 'Excellent')).toEqual(4);
       expect( tipCalculator(26.95, 'Good')).toEqual(3);
       expect( tipCalculator(20, 'Pore')).toEqual('Rating not recognised');
       expect( tipCalculator(26.95, 'GOod')).toEqual(3);
});