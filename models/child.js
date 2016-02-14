var mongoose = require("mongoose");

var childSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	zip: Number
});

module.exports = mongoose.model("Child", childSchema);