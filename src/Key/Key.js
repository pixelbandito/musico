import React, { Component } from 'react';

class Key extends Component {
  state = {
    playing: false,
  }

  handleClick = () => {
    if (this.state.playing) {
      this.o.stop();
      this.o = null;
      this.context = null;
    } else {
      this.context = new AudioContext()
      this.o = this.context.createOscillator()
      this.o.type = 'sine'
      this.o.connect(this.context.destination)
      this.o.start();
    }
    this.setState(prevState => ({ playing: !prevState.playing }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default Key;
