import React, { Component } from 'react';

import Key from '../Key';

class KeyBoard extends Component {
  render() {
    return (
      <div
        className="KeyBoard"
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Key note="c" />
        </div>
        <div>
          <Key note="d" />
        </div>
      </div>
    );
  }
}

export default KeyBoard;
