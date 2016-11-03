
var personaldata = require('../personaldata.json');
var communitydata = require('../communitydata.json');
var lights = require('../lights.json');

exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'pageName': name,
		'alarms': [
	  	{	'name': 'Work',
	  		'time': '7:00am',
	  		'alarmId': 'workAlarm'
	  	},
		{	'name':	'Class',	
			'time': '11:00am',	
			'alarmId':	'classAlarm'
		},	
		{	'name':	'Dinner',	
			'time':	'5:00pm',	
			'alarmId':	'dinnerAlarm'	
		}
  		],
  		'personaldata': personaldata,
  		'communitydata': communitydata,
  		'lights': lights
	});
};