import React from 'react';
import '../Form/style.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function form() {
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
                        <input type="text" value="" placeholder="Email/Username" />
                        </div>
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" value="" placeholder="Password" />
                    </div>
                    <button type="submit" className="getting_started"> Get Started</button>
                </div>
            
        </div>

    )
}
