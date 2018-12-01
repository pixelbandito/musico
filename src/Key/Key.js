import React, { Component } from 'react';

const notes = {
  c: 261.6,
  d: 293.7,
  e: 329.6,
}

class Key extends Component {
  state = {
    playing: false,
    context: (window.AudioContext && new window.AudioContext()) || (window.webkitAudioContext && new window.webkitAudioContext()) || null,
  }

  componentDidMount() {
    const { note } = this.props;
    const { context } = this.state;
    this.gainNode = context.createGain()
    this.oscillator = context.createOscillator()
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = notes[note];
    this.oscillator.start(0);
    this.gainNode.gain.setValueAtTime(0.0001, context.currentTime);
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(context.destination);
  }

  handleClick = () => {
    const { context, playing } = this.state;

    if (playing) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.4);
    } else {
      this.gainNode.gain.exponentialRampToValueAtTime(1, context.currentTime + 0.1);
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
