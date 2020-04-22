import React from 'react';
import './App.css';
import TDFNav from "./components/TDFNav";

function App() {
  var loginName = "myName"
  return (
    <div className="App">
      <TDFNav loginName={loginName}/>
    </div>
  );
}

export default App;
