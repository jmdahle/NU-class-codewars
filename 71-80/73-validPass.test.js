const validPass = require('./73-validPass.js');

const cases = [
    {
        "input" : "a1s",
        "output" : "INVALID"
    },
    {
        "input" : "1x345678901234567890",
        "output" : "VALID"
    },
    {
        "input" : "12345678901234567890",
        "output" : "INVALID"
    },
    {
        "input" : "1x3456789012345678901",
        "output" : "INVALID"
    },
    {
        "input" : "Username123",
        "output" : "VALID"
    },
    {
        "input" : "Username",
        "output" : "INVALID"
    },
]

describe('Test cases', () => {
    test('Examples', () => {
        for (let i=0; i<cases.length;i++) {
            expect( validPass(cases[i].input)).toEqual(cases[i].output);
        }        
    });
});
