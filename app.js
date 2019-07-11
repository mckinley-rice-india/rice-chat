const app = require('express')();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config.json');
const fs   = require('fs');
const jwt = require('jsonwebtoken');
const loginRoute=require('./routes/login');
const mongoose = require('mongoose');
const signupRoute=require('./routes/signup');
const subscribe=require('./routes/subscription');

mongoose.connect("mongodb://localhost:27017/login",{ useNewUrlParser: true })

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routing
app.use("/", loginRoute);
app.use("/signup", signupRoute);
app.use("/subscribe",subscribe);


//connecting to the server
app.listen(process.env.port||5000,function(){
	console.log("Server started at 5000");
})