const capital = require('./28-capital.js');

describe('Test cases', () => {
    test('Examples', () => {
        state_capitals = [{state: 'Maine', capital: 'Augusta'}];
        result = capital(state_capitals);
        expect(result[0]).toEqual("The capital of Maine is Augusta");
        
        country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}];
        result = capital(country_capitals);
        expect(result[0]).toEqual("The capital of Spain is Madrid");
        
        mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}];
        result = capital(mixed_capitals);
        expect(result[1]).toEqual("The capital of Spain is Madrid")
        
    });
});
