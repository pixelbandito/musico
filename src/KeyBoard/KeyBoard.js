import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Key from '../Key';

class KeyBoard extends Component {
  render() {
    const {
      volMute,
      volMax,
      attack,
      decay,
      sustain,
      release,
    } = this.props;

    const keySizing = {
      flex: '0 0 12.5%',
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
          userSelect: 'none',
        }}
      >
        <Key
          note="C4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="D4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="E4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="F4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="G4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="A4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="B4"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
        <Key
          note="C5"
          { ...keyVolumeProps }
          { ...keyADSRProps }
          style={{ ...keySizing }}
        />
      </div>
    );
  }
}


Key.propTypes = {
  volMute: PropTypes.number,
  volMax: PropTypes.number,
  attack: PropTypes.number,
  decay: PropTypes.number,
  sustain: PropTypes.number,
};

Key.defaultProps = {
  volMute: 0.0001,
  volMax: 1,
  attack: 0.03,
  decay: 0.03,
  sustain: 2,
  release: 1,
};

export default KeyBoard;
