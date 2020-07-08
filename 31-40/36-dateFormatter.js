// Date Formatter //
// https://www.codewars.com/kata/5846aaffdbb1b19d300001fb
// 7 kyu

// Description
// You are to implement a getDate function, which takes a unix timestamp and a locale as input and returns the formatted date based on the locale.

// the locale formats to use are stored in the preloaded structure formats. For example,

// Example:

// getDate(1481020142, 'en-GB') -> '06/12/2016' (format->'dd/mm/yyyy')
// getDate(1481020142, 'de-DE') -> '06.12.2016' (format->'dd.mm.yyyy')
// getDate(1481020142, 'hu-HU') -> '2016. 12. 06.' (format->'yyyy. mm. dd.')
// little hint: don't choose the hard way

// Helper function
const formats = {
    "en-GB": "dd/mm/yyyy",
    "en-US": "m/d/yy",
    "de-DE": "dd.mm.yyyy",
    "hu-HU": "yyyy. mm. dd."
}

// Function
const dateFormatter = (uts, loc) => {
    let date = new Date(uts*1000);
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    let day = date.getDate().toString()
    let dateFormat = formats[loc];
    let formattedDate = dateFormat.replace(/[y]{4}/,year).replace(/[y]{2}/,year.slice(-2)).replace(/[m][m]/,("0"+month).slice(-2)).replace(/[m]{1}/,month).replace(/[d][d]/,("0"+day).slice(-2)).replace(/[d]{1}/,day);
    return formattedDate;
}

// Export
module.exports = dateFormatter;

// Test
// console.log(dateFormatter(1481020142, 'en-GB'));
// console.log(dateFormatter(1481020142, 'en-US'));