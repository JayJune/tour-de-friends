import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TDFLoginPage = props => {
    return(
        <div className="vertical-grow-full">
            <div className="vertical-center-flex" style={{height: "100%"}}>
                <div className="center-with-padding form-group">
                    <label htmlFor="loginName">Login Name</label>
                    <input type="text" 
                        className="form-control"
                        id="loginName"
                        name="loginName" 
                        onChange={props.changeHandler}
                        placeholder="Enter login" 
                        value={props.loginName} 
                    />
                </div>
                <div className="center-with-padding form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        className="form-control"
                        id="password"
                        placeholder="Password" 
                    />
                </div>
                <div className="center-with-padding">
                    <Button variant="warning" onClick={props.toggleLoggedIn}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default TDFLoginPage;