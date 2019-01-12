import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './global.css';
import './App.css';

import ASDRPanel from './ASDRPanel';
import KeyBoard from './KeyBoard';

class App extends Component {
  state = {
    attack: 0.05,
    decay: 0.05,
    decayLevel: 0.5,
    release: 1,
    sustain: 3,
    volMax: 1,
  }

  updateADSRProps = key => value => this.setState({ [key]: value })

  render() {
    const {
      attack,
      decay,
      decayLevel,
      sustain,
      release,
      volMax,
    } = this.state;

    const ADSRProps = {
      attack,
      decay,
      decayLevel,
      sustain,
      release,
      volMax,
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
            flex: '0 0 auto',
            minHeight: '0',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
          }}>
            <ASDRPanel
              ADSRProps={ADSRProps}
              update={this.update}
              updateADSRProps={this.updateADSRProps}
            />
          </div>
          <div style={{
            flex: '1 1 auto',
            minHeight: '0',
            overflow: 'hidden',
            display: 'flex',
            flexFlow: 'column nowrap',
          }}>
            <KeyBoard
              volMute={0.0001}
              volMax={volMax}
              {...ADSRProps}
            />
          </div>
      </div>
    );
  }
}

export default App;
