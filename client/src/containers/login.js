import axios from 'axios';
import { BrowserRouter,Link,Redirect } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import signup from './signup';
import sha256 from 'sha256';



export default class login extends React.Component
{
	constructor(){
		super();
		this.state={
			email: '',
			password: '',
			status: false,
			subscribed: false,
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handlePasswordChange=this.handlePasswordChange.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);
	}
	handleEmailChange(e){

		this.setState({email: e.target.value});

	}
	handlePasswordChange(e){

		this.setState({password: e.target.value});

	}
	handleSubmit(e){
		e.preventDefault();
		const data = {
			email: this.state.email,
			password: sha256(this.state.password),
		}
		console.log(data);
		axios.post("http://localhost:5000/", data).then((res)=>{
    		 		localStorage.setItem("jwtToken", res.data.Body);
    		 		if(res.data.Subscribed==true)
    		 		{
    		 			this.setState({subscribed: true, status : true});
					}
					else
					{
						this.setState({subscribed: false, status : true});
					}

    	})
  	}
 
  	render()

  		{const {status, subscribed, msg} = this.state;
  			if(status && subscribed){
				return <Redirect to="/logout" />
			 }
			else 
			{			
   				if(this.state.status===true && this.state.subscribed===false)
				{
					return <Redirect to="/subscribe" />
				}
				else{
				    return(
				    <Container className="divStyle">
					<div className="divStyle">
					<h1>Log In</h1>
					<p> Need a Ricechat account? <Link to="/signup"> Signup </Link> </p>
					<form onSubmit={this.handleSubmit}>
					<div className="divStyle">
					<label>
					Email: 
					    <input type="text" 
			               name="email" onChange={this.handleEmailChange}/>
			        </label>
			        </div>
			        <div className="divStyle">
			        <label>
					Password: 
					    <input type="password" 
			               name="password" onChange={this.handlePasswordChange}/>
			        </label>
			        </div>
			        <div className="divStyle">
			        <label> 
					    <input type="Submit" 
			               name="Login" value="Login" className="submit"/>
			        </label>
			        </div>
					</form>
					</div>
					</Container>
					);
				}
			}
	}
}
