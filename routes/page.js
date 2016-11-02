exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'pageName': name,
		'alarms': [
	  	{	'name': 'Work',
	  		'time': '7am',
	  		'id': 'workAlarm'
	  	},
		{	'name':	'Class',	
			'time': '11am',	
			'id':	'classAlarm'
		},	
		{	'name':	'Dinner',	
			'time':	'5pm',	
			'id':	'dinnerAlarm'	
		}
  		]
	});
};