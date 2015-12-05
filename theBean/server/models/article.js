var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
	title: String,
	date: String,
	subtitle: String,
	content: String,
	imgName: String
});