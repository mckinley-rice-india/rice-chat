import React, { Component} from 'react';
import '../Form/style.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

export default class form extends Component{

    // constructor(props){
    //     super(props)
    //     handleChange=this.handleChange.bind(this)
    // }
    render() {
    return (
        <div>
            
            <div>
                <img className='dark_background' />
            </div>
            <div  className = "login-box" >
                <div className="headBox">
                    <img className="imgStyle" src={require('../../images/logo.jpg')} />
                    <div className="titleStyle">Ricechat</div>
                </div>

                <div className="text_Login">Have an account? Login.</div>
                
                <div className="email_Password">
                    <div>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Email/Username" name="email" />
                    </div>
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input type="password"  placeholder="Password" name="password" />
                </div>
                <button type="submit" className="getting_started">Get Started</button>
            </div>
            
        </div>

    )
  }
}
