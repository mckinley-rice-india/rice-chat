import React from 'react';
import './App.css';
import signup from './containers/signup';
import logout from './containers/logout';
import Subscribe from './containers/subscribe';
import jwt_decode from 'jwt-decode';
import * as ROUTES from './constants/routes';
import login from './containers/login';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

	
class App extends React.Component{
	constructor() {
		super();
		this.state = {
			tokenPresent: false
		}
	}

	componentDidMount() {
		if(localStorage.jwtToken) {
		  const token = localStorage.jwtToken;
		  console.log(token);
		  const decoded  =  jwt_decode(token);
		  //console.log("HI",decoded);
		  const currentTime = Date.now() / 1000; // to get in miliseconds
		  if(decoded.expiresIn < currentTime) {
		  	window.location.history='/logout';
		  	this.setState({
		  		tokenPresent: true
		  	})
		  }
		}

	}
	render() {
		const { tokenPresent } = this.state;
			return (
				<Router>
					{tokenPresent ? 
						<React.Fragment>			  		
				        <Route exact path={ROUTES.LOG_IN} component={login} />
				        <Route exact path={ROUTES.SIGN_UP} component={signup} />
				        <Route exact path={ROUTES.LOG_OUT} component={logout} />
				        <Route exact path={ROUTES.SUBSCRIBE} component={Subscribe} /> 
				        </React.Fragment>
			    :
			    	<React.Fragment>
			        <Route exact path="/" component={login} />
			        <Route exact path="/signup" component={signup} />
			        </React.Fragment>
			    }
			    </Router>
				);
			    
	}
}

export default App;
 