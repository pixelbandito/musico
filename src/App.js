import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

// import Key from '../Key';
import KeyBoard from './KeyBoard';

class App extends Component {
  state = {
    attack: 0.05,
    decay: 0.05,
    sustain: 3,
    release: 1,
  }

  update = (key) => (event) => {
    const nextValue = parseInt(event.target.value, 10);
    if (!isNaN(nextValue)) {
      this.setState({
        [key]: nextValue,
      });
    }
  }

  render() {
    const {
      attack,
      decay,
      sustain,
      release,
    } = this.state;

    const keyADSRProps = {
      attack,
      decay,
      sustain,
      release,
    };

    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          height: '100vh',
          width: '100vw',
        }}
      >
          <Helmet>
              <title>Musico</title>
          </Helmet>
          <div style={{
            flex: '0 0 10vw',
            minHeight: '0',
          }}>
            <input
              type="number"
              placeholder="Attack"
              onChange={this.update('attack')}
            />
            <input
              type="number"
              placeholder="Decay"
              onChange={this.update('decay')}
            />
            <input
              type="number"
              placeholder="Sustain"
              onChange={this.update('sustain')}
            />
            <input
              type="number"
              placeholder="Release"
              onChange={this.update('release')}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            minHeight: '0',
            overflow: 'hidden',
          }}>
            <KeyBoard
              volMute={0.0001}
              volMax={1}
              {...keyADSRProps}
            />
          </div>
      </div>
    );
  }
}

export default App;
