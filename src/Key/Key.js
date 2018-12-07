import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noteValues } from './notes';
import Strikeable from '../Strikeable';

class Key extends Component {
  static baseClass = 'Key'

  state = {
    playing: false,
    nextVolume: this.props.volMute,
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
    this.nextGain = null;
  }

  handleStrikeStart = (event) => {
    const {
      volMax,
      volMute,
      attack,
      decay,
      sustain
    } = this.props;

    const { context } = this.state;
    this.gainNode.gain.cancelScheduledValues(context.currentTime);
    setTimeout(() => {
      this.gainNode.gain.exponentialRampToValueAtTime(volMax * event.touchY * 0.8 + 0.2, context.currentTime + attack);
      setTimeout(() => {
        console.log({ currentTime: context.currentTime, decay });
        this.gainNode.gain.exponentialRampToValueAtTime(volMax * event.touchY * 0.8 * 0.5 + 0.2, context.currentTime + decay);
        setTimeout(() => {
          this.gainNode.gain.exponentialRampToValueAtTime(volMute, context.currentTime + sustain);
        });
      });
    });
    // this.gainNode.gain.exponentialRampToValueAtTime(volMax * event.touchY * 0.8 + 0.2, context.currentTime + attack);
    // this.gainNode.gain.exponentialRampToValueAtTime(volMute, context.currentTime + sustain);
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
    setTimeout(() => this.gainNode.gain.exponentialRampToValueAtTime(volMute, context.currentTime + release));
    // this.gainNode.gain.exponentialRampToValueAtTime(volMute, context.currentTime + release);
    this.setState({ playing: false });
  }

  render() {
    const {
      note,
      style,
    } = this.props;

    const { playing } = this.state;

    const isBlack = note.indexOf('#') >= 0 || note.indexOf('b') >= 0;

    const className = classNames(Key.baseClass, {
      [`${Key.baseClass}--active`]: playing,
      [`${Key.baseClass}--black`]: isBlack,
    });

    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'grid',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr',
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
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            color: isBlack ? '#444' : '#ccc',
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
  sustain: PropTypes.number,
  release: PropTypes.number,
};

Key.defaultProps = {
  note: 'C4',
  volMute: 0.0001,
  volMax: 1,
  attack: 0.03,
  decay: 0.1,
  sustain: 2,
  release: 1,
};

export default Key;
