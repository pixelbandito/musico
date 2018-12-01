import React, { Component } from 'react';
import { Holdable } from 'react-touch';

class Strikeable extends Component {
  handleHoldComplete = (event) => {
    console.log('handleHoldComplete', { event });
  }

  handleHoldProgress = (event) => {
    console.log('handleHoldProgress', { event });
  }

  handleTap = (event) => {
    console.log('handleTap', { event });
  }

  render() {
    return (
      <Holdable
        onHoldComplete={this.handleHoldComplete}
        onHoldProgress={this.handleHoldProgress}
        children={(event) => (
          <div style={{
              height: '100px',
              width: '100px',
              background: 'pink',
            }}
          >
            {event.holdProgress}
          </div>
        )}
      />
    );
  }
}

class KeyBoard extends Component {
  render() {
    return (
      <Strikeable />
    );
  }
}

export default KeyBoard;
