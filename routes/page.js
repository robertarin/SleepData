exports.viewPage = function(req, res) {
	var name = req.params.name;
	res.render(name, {
		'pageName': name
	});
};