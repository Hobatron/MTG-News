var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	catagory: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	postDate: {
		type: Date,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true,
		unique: true
	},
	comments: {
		type: Schema.Types.ObjectId,
		ref: "Comments"
	}
});

var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;