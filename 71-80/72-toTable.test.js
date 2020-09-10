const toTable = require('./72-toTable.js');

cases = [
    {
        "input": [[["o"]], false, false],
        "output": "<table><tbody><tr><td>o</td></tr></tbody></table>"
    },
    {
        "input": [[["lorem", "ipsum"], ["dolor", "sit amet"]], true, true],
        "output": "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"
    },
    {
        "input": [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], false, true],
        "output": "<table><tbody><tr><td>1</td><td>1</td><td>2</td><td>3</td></tr><tr><td>2</td><td>4</td><td>5</td><td>6</td></tr><tr><td>3</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>"
    },
    {
        "input": [
            [
                ["id", "name", "price", "quantity"],
                [24351, "pen", 2.41, 500],
                [null, "pencil", 0.99, 25],
                [63401, "grizzly bear", null, 1],
                [3532, "rubber duck", 5.45, 24],
                [1523, null, 3.00, 6.8],
                [11765, "caviar", 67.95, null]
            ], true, false],
        "output": "<table><thead><tr><th>id</th><th>name</th><th>price</th><th>quantity</th></tr></thead><tbody><tr><td>24351</td><td>pen</td><td>2.41</td><td>500</td></tr><tr><td></td><td>pencil</td><td>0.99</td><td>25</td></tr><tr><td>63401</td><td>grizzly bear</td><td></td><td>1</td></tr><tr><td>3532</td><td>rubber duck</td><td>5.45</td><td>24</td></tr><tr><td>1523</td><td></td><td>3</td><td>6.8</td></tr><tr><td>11765</td><td>caviar</td><td>67.95</td><td></td></tr></tbody></table>"
    },
    {
        "input": [[["a", "b", "c", "d", "e"], [true, false, false, true, true]], true, false],
        "output": "<table><thead><tr><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th></tr></thead><tbody><tr><td>true</td><td>false</td><td>false</td><td>true</td><td>true</td></tr></tbody></table>"
    },
]
describe('Test cases', () => {
    test('Examples', () => {
        for (let i=0; i<cases.length; i++) {
            expect( toTable(cases[i].input[0],cases[i].input[1],cases[i].input[2])).toEqual(cases[i].output);
           }        
    });
});
