import React, { Component } from 'react';

import Key from '../Key';

class KeyBoard extends Component {
  render() {
    const keySizing = {
      flex: '0 0 50%',
    };

    return (
      <div
        className="KeyBoard"
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          height: '100vh'
        }}
      >
        <Key
          note="c"
          style={{ ...keySizing }}
        />
        <Key
          note="d"
          style={{ ...keySizing }}
        />
      </div>
    );
  }
}

export default KeyBoard;
