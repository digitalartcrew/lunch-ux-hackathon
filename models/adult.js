var mongoose = require("mongoose");

var adultSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	zip: Number
});

module.exports = mongoose.model("Adult", adultSchema);