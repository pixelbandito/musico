import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { noteValues } from './notes';
import Strikeable from '../Strikeable';

class Key extends Component {
  state = {
    playing: false,
    context: (window.AudioContext && new window.AudioContext()) || (window.webkitAudioContext && new window.webkitAudioContext()) || null,
  }

  componentDidMount() {
    const {
      note,
      volMute,
    } = this.props;

    const { context } = this.state;
    this.gainNode = context.createGain()
    this.oscillator = context.createOscillator()
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = noteValues[note];
    this.oscillator.start(0);
    this.gainNode.gain.setValueAtTime(volMute, context.currentTime);
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(context.destination);
  }

  handleStrikeStart = () => {
    console.log('handleStrikeStart');

    const {
      volMax,
      volMute,
      attack,
      decay
    } = this.props;

    const { context } = this.state;
    this.gainNode.gain.cancelScheduledValues(context.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(volMax, context.currentTime + attack);
    this.gainNode.gain.exponentialRampToValueAtTime(volMute, context.currentTime + decay);
    this.setState({ playing: true });
  }

  handleStrikeEnd = () => {
    const {
      volMute,
      release,
    } = this.props;

    console.log('handleStrikeEnd');
    const { context } = this.state;
    this.gainNode.gain.cancelScheduledValues(context.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(volMute, context.currentTime + release);
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

Key.propTypes = {
  note: PropTypes.string,
  volMute: PropTypes.number,
  volMax: PropTypes.number,
  attack: PropTypes.number,
  decay: PropTypes.number,
  release: PropTypes.number,
};

Key.defaultProps = {
  note: 'C4',
  volMute: 0.0001,
  volMax: 1,
  attack: 0.03,
  decay: 2,
  release: 1,
};

export default Key;
