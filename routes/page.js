exports.viewPage = function(req, res) {
	var name = req.params.name;
	var description = req.params.description;
	res.render('page', {
		'pageName': name,
	});
};