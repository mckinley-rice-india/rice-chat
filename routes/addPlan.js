const express = require("express");
const router = express.Router();
const stripe=require("../config/configStripe");

router.get("/",function(req,res){
	stripe.plans.create({
		  amount: 1000,
		  interval: "week",
		  product: {
		    name: "Silver Royal"
		  },
		  currency: "usd",
		}, function(err, plan) {
		if(err)
			console.log(err)
		else
			res.send(plan);
	});
})

module.exports=router;