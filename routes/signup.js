const bodyParser = require('body-parser');
const express = require('express');
const router = express();
const userFun=require('../models/User/userControl')

router.post("/",async function(req,res){
	console.log(req.body.email);
	newUser={
		password: req.body.password,
		email: req.body.email
	}
	const resUser=await userFun.checkIfExists(req.body.email);
	console.log("Hey",resUser);
	if(resUser==null)
	{
		var y= await userFun.createUser(newUser);
		res.status(200).json({status: "success"});

	}
});

module.exports=router;