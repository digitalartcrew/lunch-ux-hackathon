var mongoose = require("mongoose");
var User = require("./user");

var caseNumberSchema = new mongoose.Schema({
	 	casenumber: Number,
		user: {
  		type: mongoose.Schema.Types.ObjectId,
  			ref: "User"
  		}
});

module.exports = mongoose.model("Casenumber", caseNumberSchema);