const busTime = require('./44-busTime.js');

describe('Test Cases', () => {
    test('Test cases during hours the bus is running)', () => {
        expect(busTime("10:00")).toEqual(10); // bus is currently arriving; catch the one arriving 15 minutes after that
        expect(busTime("15:05")).toEqual(5); // bus is arriving in 10 minutes
        expect(busTime("12:10")).toEqual(0); // bus is arriving in 5 minutes
        expect(busTime("12:11")).toEqual(14); // bus is arriving in 4 minutes.. just too late for me to catch the next bus!
    });
    test('Test cases where next bus is at daily start time', () => {
        expect(busTime("05:00")).toEqual(55); // next bus is 6am
        expect(busTime("05:10")).toEqual(45); // next bus is 6am
        expect(busTime("04:10")).toEqual(105); // next bus is 6am
        expect(busTime("00:00")).toEqual(355); // next bus is 6am
    });
    test('Test cases at end of day', ()=> {
        expect(busTime("23:55")).toEqual(0); // Next bus arrives in 5 minutes... the last one of the day!!!
        expect(busTime("23:54")).toEqual(1); // I have just 1 minute to leave before catching the final bus of the day!
        expect(busTime("23:56")).toEqual(359);  // Ugh... the next bus is 6am!
    });
});
