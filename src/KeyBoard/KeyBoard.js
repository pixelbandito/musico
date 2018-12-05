import React, { Component } from 'react';

import Key from '../Key';

class KeyBoard extends Component {
  render() {
    const keySizing = {
      flex: '0 0 12.5%',
      minWidth: '0',
      overflow: 'hidden',
    };

    return (
      <div
        className="KeyBoard"
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          height: '100vh',
          userSelect: 'none',
        }}
      >
        <Key
          note="C4"
          style={{ ...keySizing }}
        />
        <Key
          note="D4"
          style={{ ...keySizing }}
        />
        <Key
          note="E4"
          style={{ ...keySizing }}
        />
        <Key
          note="F4"
          style={{ ...keySizing }}
        />
        <Key
          note="G4"
          style={{ ...keySizing }}
        />
        <Key
          note="A4"
          style={{ ...keySizing }}
        />
        <Key
          note="B4"
          style={{ ...keySizing }}
        />
        <Key
          note="C5"
          style={{ ...keySizing }}
        />
      </div>
    );
  }
}

export default KeyBoard;
