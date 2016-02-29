var mongoose = require("mongoose");
var User = require("./user");

var signatureSchema = new mongoose.Schema({
	 	signature: Array,
	 	date: Date,
		user: {
  		type: mongoose.Schema.Types.ObjectId,
  			ref: "User"
  		}
});

module.exports = mongoose.model("Signature", signatureSchema);