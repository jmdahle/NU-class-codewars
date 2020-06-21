const drawStairs = require('./22-drawStairs.js');

test('test cases', ()=>{
    expect( drawStairs(1)).toEqual('I');
    expect( drawStairs(3)).toEqual('I\n I\n  I');
});