import React, { Component } from "react";
import './App.css';
import News from "./components/News";
import Map from "./components/Map";
import Pictures from "./components/Pictures";
import Hotspots from "./components/Hotspots";
import FindAFriend from "./components/FindAFriend";
import Forums from "./components/Forums";
import Stream from "./components/Stream";
import About from "./components/About";
import Profile from "./components/Profile";
import TDFNav from "./components/TDFNav";
import TDFLoginPage from "./components/TDFLoginPage";
import history from "./history.js";
import { gapi, loadAuth2 } from 'gapi-script'

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
      gProfile: {},
      loggedIn: false
    }
  }
  
  async componentDidMount(){
    let auth2 = await loadAuth2(process.env.REACT_APP_CLIENT_ID, '')
    if (auth2.isSignedIn.get()) { //if we are still signed in
      console.log(auth2);
      const myState = this.usePersistedState('state', {gProfile: {}, loggedIn: false});
      this.setState({
        ...myState
      })
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

  // componentWillUnmount(){
  //   this.usePersistedState('state', null);
  // }

  routeTo = (location) => {
    history.push(`${process.env.PUBLIC_URL}${location}`);
  }

  toggleLoggedIn = (newProfile) => {
    var newLoggedIn = this.state.loggedIn;
    if(newLoggedIn){
      this.setState({
        gProfile: {},
        loggedIn: false
      });
      history.push(`${process.env.PUBLIC_URL}/`);
    }
    else{
      console.log(newProfile);
      this.setState({
        gProfile: newProfile,
        loggedIn: true
      });
      console.log(this.state);
      history.push(`${process.env.PUBLIC_URL}/`);
    }
  } 

  usePersistedState(key, defaultValue) {
    if(defaultValue){
      const persistedState = localStorage.getItem(key);
      return persistedState ? JSON.parse(persistedState) : defaultValue;
    }
    else{ //if defaultValue is null then save
      window.localStorage.setItem(key, JSON.stringify(this.state))
    }
  }

  render(){
    const myUrlPrefix = process.env.PUBLIC_URL;
    return (
      <div className="App">
        <Router basename={"/tour-de-friends"} history={history} >
          <TDFNav 
            loggedIn={this.state.loggedIn}
            gName={this.state.gProfile.givenName}
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
            <Route path={`${myUrlPrefix}/map`}>
              <Map />
            </Route>
            <Route path={`${myUrlPrefix}/findAFriend`}>
              <FindAFriend />
            </Route>
            <Route path={`${myUrlPrefix}/forums`}>
              <Forums />
            </Route>
            <Route path={`${myUrlPrefix}/pictures`}>
              <Pictures />
            </Route>
            <Route path={`${myUrlPrefix}/hotspots`}>
              <Hotspots />
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
