import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';

import { Link, Switch, Route,Redirect } from "react-router-dom";
import "./index.css"
function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState('');

    function componentClicked() {
        console.log("clicked")
    }
    function responseFacebook(response) {
        console.log("who: " + response.status);
        if (response.status === "unknown") {
            setIsLoggedIn(false);
            return
        }
        setIsLoggedIn(true);
        setUserId(response.userId);
        setName(response.name);
        setEmail(response.email);
        setPicture(response.picture.data.url)
    }
    function responseGoogle(response) {
        console.log(response)
        if(response.error){
            setIsLoggedIn(false)
            return;

        }
        setIsLoggedIn(true);
        setUserId(response.profileObj.googleId);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setPicture(response.profileObj.imageUrl)

    }
    return <div className="login-container">
    <div className="topnav">
    <Link to="/#"><img className="image" style={{height:"40px",width:"40px"}}
    src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" alt="logo"/></Link>
    </div>
        <h1>Login</h1>
        {
            isLoggedIn ?
            //  <div>
            //     <h1>hello,{name}</h1>
            //     <p>email: {email}</p>
            //     <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={picture} alt="picture" />
            // </div>
             <Redirect to="/contact" />:
            <div className="container">
                <div className="inner">
                      <div className="google">
                    <GoogleLogin
                            clientId="516278449734-0q8vjoludtucf27p46dvtgbpbfbj1vc3.apps.googleusercontent.com"
                            buttonText="Login using Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                <div className="facebook">
                    <FacebookLogin
                appId="299605661226766"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                className="f"
                 />
                </div>
                </div>
                </div>
        }

    </div>;
}
export default Login;
//
