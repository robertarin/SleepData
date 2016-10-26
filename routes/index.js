
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'links': [
	  	{	'name': 'Tasks',
	  		'image': 'tasks.jpg',
	  		'id': 'task'
	  	},
		{	'name':	'Science',	
			'image':	'science.jpg',	
			'id':	'tasks'
		},	
		{	'name':	'Alarms',	
			'image':	'alarms.jpg',	
			'id':	'alarms'	
		},
  	]
  	
  });
};