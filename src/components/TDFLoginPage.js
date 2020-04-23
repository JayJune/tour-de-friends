import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TDFLoginPage = props => {
    var myFormGroupName = props.valid ? "form-group" : "form-group has-danger";
    var myFormControlName = props.valid ? "form-control" : "form-control is-invalid";
    console.log(props.valid);
    return(
        <div style={{display: "flex"}}>
            <div className="pad-center"></div>
            <div className="vertical-center-flex">
                <div className="center-with-padding">
                    <div className={myFormGroupName}>
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
                    </Button>
                </div>
            </div>
            <div className="pad-center"></div>
        </div>
    )
}
export default TDFLoginPage;