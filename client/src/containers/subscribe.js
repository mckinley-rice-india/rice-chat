import axios from 'axios';
import { BrowserRouter,Link,Redirect } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import React, { Component } from 'react';
import signup from './signup';
import sha256 from 'sha256';

export default class login extends React.Component
{
	constructor(){
		super();
		this.state={
			email:"",
			subscribed:false,
			subId:"",
			subEnd:""
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleEmailChange=this.handleEmailChange.bind(this);

	}
	handleEmailChange(e){

		this.setState({email: e.target.value});

	}
	handleSubmit(e){
		e.preventDefault();
		
		console.log("Here");
		console.log(this.state.email);
		const payload = {
			email: this.state.email
		}
		axios.post("http://localhost:5000/subscribe", payload).then((res)=>{
    	 		//console.log("Subscribe ka response",res.data);
    	 		if(res.data.Subscribed==true)
    	 		{
    	 			this.setState({subscribed: true});
    	 			this.setState({subId:res.data.subscription.id});
    	 			var endDate=new Date(res.data.subscription.current_period_end*1000);
    	 			this.setState({subEnd:JSON.stringify(endDate)});	
					this.forceUpdate();
				}

    	})
  	}
  	render(){ 
  		if(this.state.subscribed){
  			return(
  				<Container className="divStyle">
					<div>
					    <h3> You have successfully subscribed to the plan </h3>
  						<h3> Your Subscription id is : {this.state.subId}</h3>
  						<h3> Your Subscription Ends at : {this.state.subEnd}</h3>
					  </div>						
				</Container>
  			);
  		}
  		else
  		{
			return(
				<Container className="divStyle">
					<div>
					<h2> Please subscribe first! </h2>
					<h3> Please confirm your email to subscribe. </h3>
					    <form>
					     <div className="divStyle">
							<label>
							Email: 
							    <input type="text" 
					               name="email" onChange={this.handleEmailChange}/>
					        </label>
					     </div>
							<div>
							    <button type="submit" class="btn btn-primary control-label" onClick={this.handleSubmit}>Submit</button>
							</div>
						</form>
					  </div>						
				</Container>
			);
		}
	}
}
