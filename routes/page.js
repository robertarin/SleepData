
var personaldata = require('../personaldata.json');
var communitydata = require('../communitydata.json');
var casedata = require('../casedata.json');
var lights = require('../lights.json');
var alarmdata = require('../alarmdata.json');

exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'showAlt' : false,
		'pageName': name,
		'alarms': alarmdata,
		'personaldata': personaldata,
		'communitydata': communitydata,
		'casedata': casedata,
		'lights': lights
	});
};

exports.profileB = function(req, res) {
	var name = 'profile';
	res.render('profile', {
		'showAlt' : true,
		'pageName': name,
		'alarms': alarmdata,
		'personaldata': personaldata,
		'communitydata': communitydata,
		'casedata': casedata,
		'lights': lights
	});
};