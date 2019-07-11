const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const stripe=require("../config/configStripe");
const userFun=require('../models/User/userControl');

router.post("/",function(req,res){
	stripe.customers.create({
	  description: req.body.email,
	  source: "tok_amex"
	}, function(err, customer) {
		if(err)
			console.log(err)
		else
		{
		stripe.subscriptions.create({
			  customer: customer.id,
			  items: [
			    {
			      plan: 'plan_FPNsVVSFo8YYJi',
			    },
			  ]
			}, async function(err, subscription) {
			    if(err)
			    	console.log(err);
			    else
			    {
			    	console.log(subscription.id);
			    	await userFun.subscribeUser(req.body.email);
			    	res.status(200).json({subscription: subscription, Subscribed: true});
			    }
			  }
			);
		}	  
	});	
})

module.exports=router;
