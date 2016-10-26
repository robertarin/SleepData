exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'pageName': name,
		'links': [
		{	'name':	'Science',	
			'image':	'science.jpg',	
			'id':	'science'
		},	
		{	'name': 'Tasks',
	  		'image': 'tasks.jpg',
	  		'id': 'task'
	  	},
		{	'name':	'Alarms',	
			'image':	'alarms.jpg',	
			'id':	'alarms'	
		},
  	]
	});
};