
var personaldata = require('../personaldata.json');
var communitydata = require('../communitydata.json');

exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'pageName': name,
		'alarms': [
	  	{	'name': 'Work',
	  		'time': '7am',
	  		'alarmId': 'workAlarm'
	  	},
		{	'name':	'Class',	
			'time': '11am',	
			'alarmId':	'classAlarm'
		},	
		{	'name':	'Dinner',	
			'time':	'5pm',	
			'alarmId':	'dinnerAlarm'	
		}
  		],
  		'personaldata': personaldata,
  		'communitydata': communitydata
	});
};