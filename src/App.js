import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './unicorn.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="log" />
          <h2>HAKUNA MATATA!</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
