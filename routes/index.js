exports.view = function(req, res){
  res.render('login', {
  	'pageName': "login"
  });
};

exports.view2 = function(req, res){
  res.render('login2', {
  	'pageName': "login2"
  });
};