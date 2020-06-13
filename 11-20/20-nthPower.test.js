const index = require('./20-nthPower.js');

test('test cases', ()=>{
    expect( index([1,2,3],2)).toEqual(9);
    expect( index([1,2,9],2)).toEqual( 81);
    expect( index([2,3,4,4,5],4)).toEqual( 625 );
    expect( index([1,2,9],3)).toEqual( -1);
    expect( index([0,-8,0,4,0],2)).toEqual(0);
    expect( index([2,-8,0,4,0],2)).toEqual(0);
    expect( index([0,-8,0,4,0],1)).toEqual(-8);
    expect( index([0,0,-8,0,4,0],2)).toEqual(64);
    expect( index([0,0,0,-2,0,4,0],3)).toEqual(-8);
});