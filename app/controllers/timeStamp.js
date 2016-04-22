'use strict';

var moment = require("moment");

var timeStamp = {
    isUnixTimestamp: function(d) {
        // unix timestamp check: only signed integers, momentjs checks if unix
        var re = /^[-]?[0-9]+$/;
        return re.test(d) && moment.unix(d).isValid();
    },
    
    isNaturalDate: function(d) {
        return moment(d, "MMMM D, YYYY", true).isValid();
    },
    
    getTimeStamp: function(d) {
        var isUnix = this.isUnixTimestamp(d);
        var isNatural = this.isNaturalDate(d);
        
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
};


module.exports = timeStamp;
