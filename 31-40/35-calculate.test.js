const calculate = require('./35-calculate.js');

describe('Test cases', () => {
    test('examples', () => {
        expect(calculate(3.2,"+", 8)).toEqual(11.2)
        expect(calculate(3.2,"-", 8)).toEqual(-4.8)
        expect(calculate(3.2,"/", 8)).toEqual(0.4)
        expect(calculate(3.2,"*", 8)).toEqual(25.6)
        expect(calculate(-3,"+", 0)).toEqual(-3)
        expect(calculate(-3,"-", 0)).toEqual(-3)
        expect(calculate(-3,"/", 0)).toEqual(null)
        expect(calculate(-3,"*", 0)).toEqual(-0); // JS is weird
        expect(calculate(-3,"w", 0)).toEqual(null)
    });
    test('my tests', () => {
        expect( calculate(2,'+',4)).toEqual(6);
        expect( calculate(2,'*',4)).toEqual(8);
        expect( calculate(2,'-',4)).toEqual(-2);
        expect( calculate(2,'/',4)).toEqual(0.5);
        expect( calculate(2,'m',4)).toEqual(null);
        expect( calculate(2,'/',0)).toEqual(null);        
    })
})