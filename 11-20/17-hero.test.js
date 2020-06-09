const hero = require('./17-hero.js');

test('test cases', () => {
    expect(hero(10,5)).toEqual(true);
    expect(hero(9,5)).toEqual(false);
    expect(hero(7, 4)).toEqual(false);
    expect(hero(4, 5)).toEqual(false);
    expect(hero(100, 40)).toEqual(true);
    expect(hero(1500, 751)).toEqual(false);
    expect(hero(0, 1)).toEqual(false);
})