import { BrowserRouter,Link,Redirect } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import sha256 from 'sha256';

export default class signup extends React.Component{
	constructor(){
		super();
		this.state={
				clr1 : "incomplete",
				clr2 : "incomplete",
				clr3 : "incomplete",
				clr4 : "incomplete",
				clr5 : "incomplete",
				password : "",
				username: "",
				email: "",
				status : false
		};
		this.handlePasswordChange=this.handlePasswordChange.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleEmailChange(e){

		this.setState({email: e.target.value});

	}
	handleSubmit(e){
		e.preventDefault();
		const data = {
			email: this.state.email,
			password: sha256(this.state.password),
		}
		//console.log("Hey");
		//console.log(data);
		fetch("http://localhost:5000/signup", {
      		method: 'POST',
      		body: JSON.stringify(data),
      		headers: {"Content-Type": "application/json"}

    	}).then((res)=>{
    		 if(res.status==200)
    		 {
    		 	this.setState({status: true});
				this.forceUpdate();
    		 }
    	})

	}

   handlePasswordChange(e) {
   this.setState({
				clr1 : "incomplete",
				clr2 : "incomplete",
				clr3 : "incomplete",
				clr4 : "incomplete",
				clr5 : "incomplete",
  			password: e.target.value,
  			});
   var pass=e.target.value;
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   if(pass.length>=8)
   {
   		this.setState({clr4: "complete"});
  		this.forceUpdate();
   }
   for (var i = 0; i < pass.length; i++) { 
  		var ascii=parseInt(pass.charCodeAt(i));
  		console.log(ascii);
  		if(ascii>=65 && ascii<=90)
  		{
  			this.setState({clr1: "complete"});
  			this.forceUpdate();
  		}
  		else if(ascii>=97 && ascii<=122) 
  		{
  			this.setState({clr2: "complete"});
  			this.forceUpdate();
  		}
  		else if(ascii>=48 && ascii<=57) 
  		{
  			this.setState({clr3: "complete"});
  			this.forceUpdate();
  		}
  		else
  		{
  			this.setState({clr5: "complete"});
  			this.forceUpdate();
  		}
		}
	}

   render(){
	   	if(this.state.status){
			    return <Redirect to='/'  />
			 }
		else{

		   	return(

		   <Container className="divStyle">
			    <div className="divStyle">
			        <h1>Get started with your account</h1>
			        <p>
			            Already have an account?
			            <Link to="/"> Login </Link>
			        </p>
			        <form onSubmit={this.handleSubmit}>
			            <div className="divStyle">
			                <label>
			                    Email:
			                    <input type="email" name="email" onChange={this.handleEmailChange}/>
			                </label>
			            </div>
			            <div className="divStyle">
			                <label>
			                    Password:
			                    <input type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password}/>
			                </label>
			            </div>
			            <Row className="req">
			                <Col md="3"></Col>
			                <Col md="3">
			                    <ul>
			                        <li className={this.state.clr2}>One lowercase character</li>
			                        <li className={this.state.clr1}>One uppercase character</li>
			                        <li className={this.state.clr3}>One number</li>
			                    </ul>
			                </Col>
			                <Col md="3">
			                    <ul>
			                        <li className={this.state.clr5}>One special character</li>
			                        <li className={this.state.clr4}>8 characters minimum</li>
			                    </ul>
			                </Col>
			                <Col md="3"></Col>
			            </Row>
			            <div className="divStyle">
			                <label>
			                    <input type="Submit" name="Login" className="submit" />
			                </label>
			            </div>
			        </form>
			    </div>
			</Container>

			);
		}
	}
}
