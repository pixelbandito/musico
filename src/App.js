import React, { Component } from 'react';
import './App.css';

import Key from './Key';
import KeyBoard from './KeyBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <KeyBoard />
          </div>
          <div>
            <Key note="c" />
            <Key note="d" />
            <Key note="e" />
          </div>
      </div>
    );
  }
}

export default App;
