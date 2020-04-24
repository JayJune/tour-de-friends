import React, { Component } from "react";
import './App.css';
import News from "./components/News";
import TDFNav from "./components/TDFNav";
import TDFLoginPage from "./components/TDFLoginPage";
import history from "./history.js";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  routeTo = (location) => {
    history.push(location);
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
        history.push('/');
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
        <Router history={history}>
          <TDFNav 
            loggedIn={this.state.loggedIn}
            loginName={this.state.loginName}
            routeTo={this.routeTo}
            toggleLoggedIn={this.toggleLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <News />
            </Route>
            <Route path="/login">
              <TDFLoginPage 
                changeHandler={this.changeHandler}
                toggleLoggedIn={this.toggleLoggedIn}
                valid={this.state.valid}
              />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/myProfile">
              <Profile />
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
