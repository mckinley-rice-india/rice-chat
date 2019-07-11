var Users=require("./Schema/user");

async function checkIfExists(email) {
	console.log(email);
	var x =  await Users.findOne({email:email}, function(user){return user});
	console.log(x);
	return x;
}
async function createUser(nUser){
	var x =  await Users.create(nUser,function(err,newU){
      if(err){
        return "Error";
      }
      else{
        return newU;
      }
    });
    console.log(x);
}
async function subscribeUser(email){
  var a=await Users.findOneAndUpdate({email:email},{$set: {'subscribed':true}})
  console.log(a);
  return a;
}
async function loginUser(email,password){
	var a=await Users.findOne({email:email})
	return a;
}
module.exports.checkIfExists=checkIfExists;	
module.exports.createUser=createUser;
module.exports.loginUser=loginUser;
module.exports.subscribeUser=subscribeUser;
