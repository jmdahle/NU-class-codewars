const getOrder = require('./57-getOrder.js');

describe('Test cases', () => {
    test('Examples', () => {
        expect(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")).toEqual(
        "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
        expect(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")).toEqual(
        "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");
    })
})

