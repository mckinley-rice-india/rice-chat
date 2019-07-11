import axios from 'axios';
import { BrowserRouter,Link,Redirect } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import signup from './signup';

export default class logout extends React.Component
{
	constructor(){
		super();
		this.state={
			status: false
		};
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		localStorage.removeItem("jwtToken");
    	this.setState({status: true});
		this.forceUpdate();

    	}
 
  	render(){
   			if(this.state.status){
			    return <Redirect to='/'  />
			 }
			else{
			    return(
			    <Container className="divStyle">
				<div className="divStyle">
				<form onSubmit={this.handleSubmit}>
		        <div className="divStyle">
		        <label> 
				    <input type="Submit" 
		               name="Logout" value="Logout" className="submit"/>
		        </label>
		        </div>
				</form>
				</div>
				</Container>
				);
			}
	}
}
