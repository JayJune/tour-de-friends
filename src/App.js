import React, { Component } from "react";
import './App.css';
import News from "./components/News";
import Social from "./components/Social";
import Stream from "./components/Stream";
import About from "./components/About";
import Profile from "./components/Profile";
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
      valid: true,
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
    history.push(`${process.env.PUBLIC_URL}${location}`);
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
      history.push(`${process.env.PUBLIC_URL}/`);
    }
    else{
      if(newLoginName){
        this.setState({
          loggedIn: true,
          loginName: newLoginName
        });
        history.push(`${process.env.PUBLIC_URL}/`);
      }
      else{
        this.setState({
          valid: false
        });
      }
    }
  } 

  render(){
    const myUrlPrefix = process.env.PUBLIC_URL;
    return (
      <div className="App">
        <Router basename={"/tour-de-friends"} history={history} >
          <TDFNav 
            loggedIn={this.state.loggedIn}
            loginName={this.state.loginName}
            routeTo={this.routeTo}
            toggleLoggedIn={this.toggleLoggedIn}
          />
          <Switch>
            <Route exact path={`${myUrlPrefix}/`}>
              <News />
            </Route>
            <Route path={`${myUrlPrefix}/login`}>
              <TDFLoginPage 
                changeHandler={this.changeHandler}
                toggleLoggedIn={this.toggleLoggedIn}
                valid={this.state.valid}
              />
            </Route>
            <Route path={`${myUrlPrefix}/social`}>
              <Social />
            </Route>
            <Route path={`${myUrlPrefix}/stream`}>
              <Stream />
            </Route>
            <Route path={`${myUrlPrefix}/about`}>
              <About />
            </Route>
            <Route path={`${myUrlPrefix}/myProfile`}>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
