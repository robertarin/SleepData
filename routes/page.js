
var personaldata = require('../personaldata.json');
var communitydata = require('../communitydata.json');
var casedata = require('../casedata.json');
var lights = require('../lights.json');

exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'pageName': name,
		'alarms': [
		{	'name': 'Class',
		'time': '9:00am',
	},
	{	'name':	'Gym',
	'time': '11:00am',
},	
{	'name':	'Work',
'time':	'2:30pm',	
}
],
'personaldata': personaldata,
'communitydata': communitydata,
'casedata': casedata,
'lights': lights
});
};