const getPlanetName = require('./05-getPlanetName.js');

test('test cases', () => {
    expect( getPlanetName(1)).toBe('Mercury');
    expect( getPlanetName(3)).toBe('Earth');
    expect( getPlanetName(2)).toBe('Venus');
    expect( getPlanetName(4)).toBe('Mars');
    expect( getPlanetName(6)).toBe('Saturn');
});