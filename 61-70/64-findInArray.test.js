// const findInArray = require('./64-findInArray.js');
import {findInArray, trueIfEven, neverTrue, trueIfValueEqualsIndex, trueIfLengthEqualsIndex} from './64-findInArray.js';


describe('Test cases', () => {
    test('Examples', () => {
        expect(findInArray([], trueIfEven)).toEqual( -1);
        expect(findInArray([1,3,5,6,7], trueIfEven)).toEqual( 3);
        expect(findInArray([2,4,6,8], trueIfEven)).toEqual( 0);
        expect(findInArray([2,4,6,8], neverTrue)).toEqual( -1);
        expect(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex)).toEqual( 4);
        expect(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex)).toEqual( 4);
        expect(findInArray(["bc","af","d","e"],trueIfLengthEqualsIndex )).toEqual( -1);
    });
});

