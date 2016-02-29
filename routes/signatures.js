var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/signatures/

router.get('/', function(req,res){
	db.Signature.find({user:req.user._id}, function(err,signatures){
		// console.log("The signatures",signatures);
		res.status(200).send(signatures);
	});
});

//Create POST /api/signatures/

router.post('/', function(req,res){
	// console.log("IN REQ..USER:\n\n\n\n\n\n",req.user) 
	db.Signature.create(req.body,function(err,signature){
		signature.user = req.user._id;  
		signature.save();
		console.log("THE NEW signature:", signature);
		res.status(201).send(signature);

	});
});

//Get SHOW /api/signatures/:id

router.get('/:id', function(req,res){
	db.Signature.findById(req.params.id, function(err,signature){
		res.status(200).send(signature);
	});
});

//Update PUT /api/signatures/:id

router.put('/:id',function(req,res){
	db.Signature.findByIdAndUpdate(req.params.id,req.body, function(err,signature){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(signature);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Signature.findByIdAndRemove(req.params.id, function(err,signature){
		res.status(200).send(signature);
	});
});

module.exports = router;

