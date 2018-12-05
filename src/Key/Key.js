import React, { Component } from 'react';

import { noteValues } from './notes';
import Strikeable from '../Strikeable';

// const notes = {
//   c: 261.6,
//   d: 293.7,
//   e: 329.6,
// }

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
    this.oscillator.frequency.value = noteValues[note];
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

  handleStrikeStart = () => {
    console.log('handleStrikeStart');
    const { context } = this.state;
    this.gainNode.gain.exponentialRampToValueAtTime(1, context.currentTime + 0.2);
    this.setState({ playing: true });
  }

  handleStrikeEnd = () => {
    console.log('handleStrikeEnd');
    const { context } = this.state;
    this.gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.4);
    this.setState({ playing: false });
  }

  render() {
    const { style } = this.props;

    return (
      <div
        className="Key"
        style={{
          ...style,
          display: 'grid',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr',
          border: '1px solid lightgray',
          backgroundColor: this.state.playing ? 'pink' : 'ivory',
        }}
      >
        <Strikeable
          onStrikeStart={this.handleStrikeStart}
          onStrike={() => {}}
          onStrikeEnd={this.handleStrikeEnd}
          style={{
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: '1fr',
          }}
        />
      </div>
    );
  }
}

export default Key;
