const getGrade = require('./13-grasshopper.js');

test('test cases', () => {
    expect(getGrade(95,90,93)).toEqual('A');
    expect(getGrade(100,85,96)).toEqual('A');
    expect(getGrade(92,93,94)).toEqual('A');
    expect(getGrade(70,70,100)).toEqual('B');
    expect(getGrade(82,85,87)).toEqual('B');
    expect(getGrade(84,79,85)).toEqual('B');
    expect(getGrade(89,89,90)).toEqual('B') ;
    expect(getGrade(70,70,70)).toEqual('C');
    expect(getGrade(75,70,79)).toEqual('C');
    expect(getGrade(60,82,76)).toEqual('C');
    expect(getGrade(65,70,59)).toEqual('D');
    expect(getGrade(66,62,68)).toEqual('D');
    expect(getGrade(58,62,70)).toEqual('D');
    expect(getGrade(44,55,52)).toEqual('F');
    expect(getGrade(48,55,52)).toEqual('F');
    expect(getGrade(58,59,60)).toEqual('F');
});