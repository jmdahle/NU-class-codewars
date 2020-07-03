const splitInParts = require('./33-splitInParts.js');

test('test cases', () => {
    expect( splitInParts('supercalifragilisticexpialidocious',3)).toEqual('sup erc ali fra gil ist ice xpi ali doc iou s');
    expect( splitInParts('HelloKata',1)).toEqual('H e l l o K a t a');
    expect( splitInParts('HelloKata',9)).toEqual('HelloKata');
})