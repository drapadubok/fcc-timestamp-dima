'use strict';

var moment = require("moment");

function isUnixTimestamp (d) {
    // unix timestamp check: only signed integers, momentjs checks if unix
    var re = /^[-]?[0-9]+$/;
    return re.test(d) && moment.unix(d).isValid();
}

function isNaturalDate(d) {
    return moment(d, "MMMM D, YYYY", true).isValid();
}

function getTimeStamp(d){
    var isUnix = isUnixTimestamp(d);
    var isNatural = isNaturalDate(d);
    
    if (isUnix || isNatural) {
        var out = {
            "unix": isUnix ? parseInt(d) : moment(new Date(d)).unix(),
            "natural": isNatural ? d : moment.unix(d).format("MMMM D, YYYY"),
        };
    } else {
        var out = {
            "unix": null,
            "natural": null,
        };
    }
    
    return out;
}

module.exports = {
    getTimeStamp: getTimeStamp,
    isUnixTimestamp: isUnixTimestamp,
    isNaturalDate: isNaturalDate,
};
