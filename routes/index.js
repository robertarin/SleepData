exports.view = function(req, res){
  res.render('Science', {
  	'pageName': "Science",
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