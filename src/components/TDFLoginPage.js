import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';

export default class TDFLoginPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.googleSDK();
    }
 
    prepareLoginButton = () => {
 
        console.log(this.refs.googleLoginBtn);
        this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
            (googleUser) => {
    
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            var newGProfile = {
                name: profile.getName(),
                email: profile.getEmail(),
                avatar: profile.getImageUrl()
            }
            this.props.toggleLoggedIn(newGProfile);
            }, 
            (error) => {
                alert(JSON.stringify(error, undefined, 2));
            });
 
    }
 
    googleSDK = () => {
        window['googleSDKLoaded'] = () => {
          window['gapi'].load('auth2', () => {
            this.auth2 = window['gapi'].auth2.init({
              client_id: '160172302129-f6agjeg64is48fdtpl44694la81v1kgb.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
              scope: 'profile email'
            });
            this.prepareLoginButton();
          });
        }
     
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    
    render(){
        return(
            <div style={{display: "flex"}}>
                <div className="pad-center"></div>
                <div className="vertical-center-flex">
                    <div className="center-with-padding">
                        {/* <div className={myFormGroupName}>
                            <input type="text" 
                                className={myFormControlName}
                                id="loginName"
                                name="loginName" 
                                onChange={props.changeHandler}
                                placeholder="Username" 
                                value={props.loginName} 
                            />
                            {!props.valid && <div className="invalid-feedback">Please enter a valid username.</div>}
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                className="form-control"
                                id="password"
                                placeholder="Password" 
                            />
                        </div> 
                        <Button variant="warning btn-lg btn-block" onClick={props.toggleLoggedIn}>
                            Login
                        </Button>*/}
                        <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
                            Login with Google
                        </button>
                    </div>
                </div>
                <div className="pad-center"></div>
            </div>
        );
    }
}