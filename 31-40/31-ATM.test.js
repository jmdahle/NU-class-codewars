const ATM = require('./31-ATM.js');

describe('Test cases', () => {
    test('should work when chosing notes is possible', () => {
        expect(ATM(770)).toEqual( 4);
        expect(ATM(550)).toEqual( 2);
        expect(ATM(10)).toEqual( 1);
        expect(ATM(1250)).toEqual( 4);
    });
    
    test("should return -1 if chosing notes is not possible", () => {
        expect(ATM(125)).toEqual( -1);
        expect(ATM(666)).toEqual( -1);
        expect(ATM(42)).toEqual( -1);
    });
});