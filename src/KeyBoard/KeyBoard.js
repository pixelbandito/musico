import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Key from '../Key';

class KeyBoard extends Component {
  state = {
    context: (window.AudioContext && new window.AudioContext()) || (window.webkitAudioContext && new window.webkitAudioContext()) || null,
  }

  render() {
    const {
      volMute,
      volMax,
      attack,
      decay,
      decayLevel,
      sustain,
      release,
    } = this.props;

    const { context } = this.state;

    const keySizing = {
      flex: '1 1 auto',
      minWidth: '0',
      overflow: 'hidden',
    };

    const keyVolumeProps = {
      volMute,
      volMax,
    };

    const keyADSRProps = {
      attack,
      decay,
      decayLevel,
      sustain,
      release,
    };

    return (
      <div
        className="KeyBoard"
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          height: '90vh',
          flex: '1 1 auto',
          minHeight: '0',
          userSelect: 'none',
        }}
      >
      {[
        'C4',
        'C#4',
        'D4',
        'D#4',
        'E4',
        'F4',
        'F#4',
        'G4',
        'G#4',
        'A4',
        'A#4',
        'B4',
        'C5',
        'C#5',
      ].map(note => (
        <Key
          context={context}
          key={note}
          note={note}
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
      ))}
      </div>
    );
  }
}


Key.propTypes = {
  volMute: PropTypes.number,
  volMax: PropTypes.number,
  attack: PropTypes.number,
  decay: PropTypes.number,
  decayLevel: PropTypes.number,
  sustain: PropTypes.number,
};

Key.defaultProps = {
  volMute: 0.0001,
  volMax: 1,
  attack: 0.03,
  decay: 0.03,
  decayLevel: 0.5,
  sustain: 2,
  release: 1,
};

export default KeyBoard;
