const bodyParser = require('body-parser');
const config = require('../config/config.json');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express();
const userFun=require('../models/User/userControl')


router.post("/",async function(req,res){
	console.log("Received");
	console.log(req.body.email)
	const resUser=await userFun.loginUser(req.body.email,req.body.password);
	var msg="";
		if(resUser==null)
		{
			msg= "Signup first";
			
		}
		else if(req.body.password==resUser.password){
			const token = await jwt.sign({ sub: resUser.id , expiresIn: 60*60*12 }, config.secret);
			console.log("User is",resUser);
			res.status(200).json({Body: token, Subscribed: resUser.subscribed});
			msg= "logged in";//token
		}
		else{
			msg= "Invalid password";
		}
	console.log(msg);

})

router.get("/",function(req,res){
	res.send("Connected");
})

module.exports=router;