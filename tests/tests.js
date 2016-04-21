var test = require('tape');
var timeStamp = require('../app/controllers/timeStamp.js');

test('timeStamp test', function (t) {
    t.plan(8);
    
    var d1 = 'December 15, 2015';
    var d2 = 1450137600;
    
    t.equal(timeStamp.isUnixTimestamp(d1), false);
    t.equal(timeStamp.isNaturalDate(d1), true);
    
    t.equal(timeStamp.isUnixTimestamp(d2), true);
    t.equal(timeStamp.isNaturalDate(d2), false);
    
    t.equal(timeStamp.getTimeStamp(d1).unix, 1450137600);
    t.equal(timeStamp.getTimeStamp(d1).natural, 'December 15, 2015');
    
    t.equal(timeStamp.getTimeStamp(d2).unix, 1450137600);
    t.equal(timeStamp.getTimeStamp(d2).natural, 'December 15, 2015');

});
