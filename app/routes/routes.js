'use strict';

var path = process.cwd();
var timeStamp = require(path + '/app/controllers/timeStamp');

module.exports = function (app) {
	// For fcc, timestamp, add form
	app.route('/timestamp/:input')
		.get(function (req, res) {
			var ts = timeStamp.getTimeStamp(req.params.input);
			res.send(ts);
		});
};
