const abbrevName = require('./07-abbrevName.js');

test('Test cases', () => {
    expect(abbrevName('Sam Harris')).toBe('S.H');
    expect(abbrevName('Patrick Feenan')).toBe('P.F');
    expect(abbrevName('Evan Cole')).toBe('E.C');
    expect(abbrevName('David Mendieta')).toBe('D.M');
    expect(abbrevName('John Dahle')).toBe('J.D');
});

