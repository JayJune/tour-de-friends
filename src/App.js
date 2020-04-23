import React, { Component } from "react";
import './App.css';
import TDFNav from "./components/TDFNav";
import TDFLoginPage from "./components/TDFLoginPage";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loginName: "",
      loggedIn: false,
      valid: true
    }
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    var newState = {...this.state};
    newState[name] = value;
    this.setState({
      ...newState
    })
  }

  toggleLoggedIn = () => {
    var newLoggedIn = this.state.loggedIn;
    var newLoginName = this.state.loginName;
    if(newLoggedIn){
      this.setState({
        loggedIn: false,
        loginName: "",
        valid: true
      });
    }
    else{
      if(newLoginName){
        this.setState({
          loggedIn: true,
          loginName: newLoginName
        });
      }
      else{
        this.setState({
          valid: false
        });
      }
    }
  } 

  render(){
    return (
      <div className="App">
        <TDFNav 
          loggedIn={this.state.loggedIn}
          loginName={this.state.loginName}
          toggleLoggedIn={this.toggleLoggedIn}
        />
        {this.state.loggedIn ? 
        <div>show logged in stuff</div>
        : <TDFLoginPage 
            changeHandler={this.changeHandler}
            toggleLoggedIn={this.toggleLoggedIn}
            valid={this.state.valid}
          />
        }
      </div>
    );
  }
}

export default App;
