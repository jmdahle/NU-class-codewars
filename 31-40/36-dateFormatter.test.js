const dateFormatter = require('./36-dateFormatter.js');

test('test cases', () => {
    expect( dateFormatter(1481020142,'en-GB')).toEqual('06/12/2016');
    expect( dateFormatter(1481020142,'de-DE')).toEqual('06.12.2016');
    expect( dateFormatter(1481020142,'hu-HU')).toEqual('2016. 12. 06.');
});