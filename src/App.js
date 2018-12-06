import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

// import Key from '../Key';
import KeyBoard from './KeyBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Helmet>
              <title>Musico</title>
          </Helmet>
          <KeyBoard
            volMute={0.0001}
            volMax={1}
            attack={0.05}
            decay={3}
            release={1}
          />
      </div>
    );
  }
}

export default App;
