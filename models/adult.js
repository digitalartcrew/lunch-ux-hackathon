var mongoose = require("mongoose");

var adultSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	address: String,
	apt: String,
	city: String,
	state: String,
	zip: Number,
	phone: String,
	email: String
});

module.exports = mongoose.model("Adult", adultSchema);