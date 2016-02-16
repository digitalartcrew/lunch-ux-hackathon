var mongoose = require("mongoose");

var childSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	age: Number,
	student: Boolean,
	ethnicity: String,
	race: String,
	type: String
});

module.exports = mongoose.model("Child", childSchema);