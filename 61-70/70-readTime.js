// Read the Time
// https://www.codewars.com/kata/5c2b4182ac111c05cf388858
// 6 KYU

// Description
/*
Given time in 24-hour format, convert it to words.

For example:
13:00 = one o'clock 
13:09 = nine minutes past one 
13:15 = quarter past one 
13:29 = twenty nine minutes past one
13:30 = half past one 
13:31 = twenty nine minutes to two
13:45 = quarter to two 
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 

*/

// Function
const solve = (time) => {
    const hours = ['midnight','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','midnight'];
    const minutes = ['o\'clock', 'one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty sever', 'twenty eight', 'twenty nine', 'half'];
    let hh = parseInt(time.substring(0,2));
    let mm = parseInt(time.substring(3));

    if (time === "00:00") {return "midnight"};

    let minuteText = '';
    let minuteUnits = '';
    let toFrom = ' ';
    let hourText = '';
    let hourSuffix = 'o\'clock';

    if (mm > 30) {
        minuteText = minutes[60-mm];
        if (mm === 45) { minuteUnits = '';toFrom = 'to '} else {minuteUnits = 'minutes '; toFrom = 'to '}
        if (60-mm === 1) {minuteUnits = 'minute '};
        hourText = hours[hh+1];
    } else {
        minuteText = minutes[mm];
        if (mm === 15 || mm === 30) { minuteUnits = '';toFrom = 'past '} else { minuteUnits = 'minutes '; toFrom = 'past '} 
        if (mm === 1) {minuteUnits = 'minute '}
        hourText = hours[hh];
    }
    if (mm === 0) {
        return `${hourText} ${hourSuffix}`;
    } else {
        return `${minuteText} ${minuteUnits}${toFrom}${hourText}`
    }
}

// Export
module.exports = solve;

// Log test
// console.log ( solve("00:00"),'');
// console.log ( solve("00:10"),'');
// console.log ( solve("00:15"),'');
// console.log ( solve("00:22"),'');
// console.log ( solve("00:30"),'');
// console.log ( solve("00:31"),'');
// console.log ( solve("00:42"),'');
// console.log ( solve("00:45"),'');
// console.log ( solve("00:59"),'');

