// tipCalculator
// https://www.codewars.com/kata/56598d8076ee7a0759000087
// 8 kyu

// Description
/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/

// Function
const tipCalculator = (billAmount, serviceRating) => {
    const tipByRating = [
        {
            rating: 'Terrible',
            tip: 0
        },
        {
            rating: 'Poor',
            tip: 5
        },
        {
            rating: 'Good',
            tip: 10
        },
        {
            rating: 'Great',
            tip: 15
        },
        {
            rating: 'Excellent',
            tip: 20
        },
    ];
    let tipRate = tipByRating.find( tip => tip.rating.toUpperCase() === serviceRating.toUpperCase());
    if (typeof tipRate === 'undefined') {
        return "Rating not recognised";
    } else { 
        return Math.ceil(tipRate.tip/100 * billAmount);
    }
}

// Export
module.exports = tipCalculator

// Test
console.log( tipCalculator(400,'Poor'));
console.log( tipCalculator(400,'Pore'));
