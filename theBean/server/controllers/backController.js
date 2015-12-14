
var Article = require('../models/article');
var ObjectId = require('mongodb').ObjectId;
// var User 	= require('../models/user');

// 53 min on the video


module.exports.create = function (req, res) {
	console.log(req.body);
	var article = new Article(req.body);
	article.save(function (err, result) {
		res.json(result);
	});
}

module.exports.list = function (req, res) {
	Article.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.remove = function (req, res) {
	var idJson = req.query;
	console.log(idJson);
	var objid = new ObjectId(idJson.id);
	console.log(objid);
    Article.remove({_id: objid}, function (err, results){
    	res.json(results);
    });
    
    // console.log(article);
  //   Article.remove(function (err, result) {
		// res.json(article);
  //   });
}

module.exports.uploadPicture = function(req, res) {
		
  var imgName = req.file.filename;
  res.json({imgName: imgName});

}
