const findLongest = require ('./14-findLongest.js');

test('test cases', () => {
    expect(findLongest("The quick white fox jumped around the massive dog")).toBe(7);
    expect(findLongest("Take me to tinseltown with you")).toBe(10); 
    expect(findLongest("Sausage chops")).toBe(7); 
    expect(findLongest("Wind your body and wiggle your belly")).toBe(6); 
    expect(findLongest("Lets all go on holiday")).toBe(7); 
})