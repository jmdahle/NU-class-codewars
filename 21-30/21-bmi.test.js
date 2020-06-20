const bmi = require('./21-bmi.js');

test('test normal bmi examples', ()=> {
    expect( bmi(80,1.8)).toEqual('Normal');
    expect( bmi(75,2)).toEqual('Normal');
});

test('test underweight bmi examples', ()=> {
    expect( bmi(75,2.2)).toEqual('Underweight');
});

test('test overweight bmi examples', ()=> {
    expect( bmi(80,1.7)).toEqual('Overweight');
});

test('test obese bmi examples', ()=> {
    expect( bmi(120,1.8)).toEqual('Obese');
});