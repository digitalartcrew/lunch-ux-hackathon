var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/casenumbers/

router.get('/', function(req,res){
	db.Casenumber.find({user:req.user._id}, function(err,casenumbers){
		// console.log("The casenumbers",casenumbers);
		res.status(200).send(casenumbers);
	});
});

//Create POST /api/casenumbers/

router.post('/', function(req,res){
	// console.log("IN REQ..USER:\n\n\n\n\n\n",req.user) 
	db.Casenumber.create(req.body,function(err,casenumber){
		casenumber.user = req.user._id;  
		casenumber.save();
		console.log("THE NEW casenumber:", casenumber);
		res.status(201).send(casenumber);

	});
});

//Get SHOW /api/casenumbers/:id

router.get('/:id', function(req,res){
	db.Casenumber.findById(req.params.id, function(err,casenumber){
		res.status(200).send(casenumber);
	});
});

//Update PUT /api/casenumbers/:id

router.put('/:id',function(req,res){
	db.Casenumber.findByIdAndUpdate(req.params.id,req.body, function(err,casenumber){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(casenumber);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Casenumber.findByIdAndRemove(req.params.id, function(err,casenumber){
		res.status(200).send(casenumber);
	});
});

module.exports = router;

