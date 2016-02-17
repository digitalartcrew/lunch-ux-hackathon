var mongoose = require("mongoose");
var User = require("./user");

var adultSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	user: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "User"
  }
});

module.exports = mongoose.model("Adult", adultSchema);