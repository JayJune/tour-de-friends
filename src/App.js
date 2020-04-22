import React, { Component } from "react";
import './App.css';
import TDFNav from "./components/TDFNav";
import TDFLoginPage from "./components/TDFLoginPage";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loginName: "",
      loggedIn: false
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
    var newLoggedIn = true;
    var newLoginName = this.state.loginName;
    if(this.state.loggedIn){
      newLoggedIn = false;
      newLoginName = "";
    }
    this.setState({
      loggedIn: newLoggedIn,
      loginName: newLoginName
    });
  } 

  render(){
    return (
      <div className="App" style={{height: window.innerHeight}}>
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
          />
        }
      </div>
    );
  }
}

export default App;
