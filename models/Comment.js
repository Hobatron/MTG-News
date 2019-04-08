var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	body: {
		type: String,
		required: true,
		trim: true
	},
	edit_code: {
		type: Number,
		required: true,
		minlength: 4,
		maxlength: 4,
		trim: true
	},
	created_at: {
		type: Date,
		default: Date.now()
	},
	last_edited: {
		type: Date,
		default: null
	}
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;