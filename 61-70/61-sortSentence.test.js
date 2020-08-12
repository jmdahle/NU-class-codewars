const sortSentence = require('./61-sortSentence.js');

describe('Test cases', () => {
    test('My examples', () => {
        expect( sortSentence('alan zebra, Alan Zebra.')).toEqual('alan zebra Zebra Alan');
    });
    test('Code Wars Examples', () => {
        expect(sortSentence("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights")).toEqual( "as habitan he him himself his in in is of of own rights the treating I Alleghanies")
        expect(sortSentence("take up the task eternal, and the burden and the lesson")).toEqual( "and and burden eternal lesson take task the the the up")
        expect(sortSentence("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!")).toEqual( "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut","sentence may end with a punctuation")
        expect(sortSentence("Pioneers, O Pioneers!")).toEqual( "Pioneers Pioneers O","sentence may end with a punctuation")    });
});

