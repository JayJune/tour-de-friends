import React, { Component } from 'react';
import GoogleLogin from "react-google-login";
//import Button from 'react-bootstrap/Button';

export default class TDFLoginPage extends Component {
    constructor(props) {
        super(props);
    }

    responseGoogle = response => {
        this.props.toggleLoggedIn(response.profileObj);
    };
    
    showError = () => {
        alert("Login failed.");
    }

    render(){
        return(
            <div style={{display: "flex"}}>
                <div className="pad-center"></div>
                <div className="vertical-center-flex">
                    <div className="center-with-padding">
                        <GoogleLogin
                            clientId="160172302129-f6agjeg64is48fdtpl44694la81v1kgb.apps.googleusercontent.com" //TO BE CREATED
                            render={renderProps => (
                                <button
                                    className="loginBtn loginBtn--google"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Log in with Google
                                </button>
                            )}
                            onSuccess={this.responseGoogle}
                            onFailure={this.showError}
                        />
                        {/* <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
                            Login with Google
                        </button> */}
                    </div>
                </div>
                <div className="pad-center"></div>
            </div>
        );
    }
}