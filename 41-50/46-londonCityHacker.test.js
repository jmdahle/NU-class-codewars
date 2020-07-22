const londonCityHacker = require('./46-londonCityHacker.js');

describe('Run test cases', () => {
    test('Example cases', () => {
        expect(londonCityHacker([12, 'Central', 'Circle', 21])).toEqual("£7.80");
        expect(londonCityHacker(['Piccidilly', 56])).toEqual("£3.90");
        expect(londonCityHacker(['Northern', 'Central', 'Circle'])).toEqual("£7.20");
        expect(londonCityHacker(['Piccidilly', 56, 93, 243])).toEqual("£5.40");
        expect(londonCityHacker([386, 56, 1, 876])).toEqual("£3.00");
        expect(londonCityHacker([])).toEqual("£0.00");
    })
})

