import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Key from './Key';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Key note="c" />
          <Key note="d" />
          <Key note="e" />
        </header>
      </div>
    );
  }
}

export default App;
