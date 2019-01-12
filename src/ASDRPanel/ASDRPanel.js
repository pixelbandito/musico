import React, { Component } from 'react';
import { Knob } from 'react-rotary-knob';

class ASDRPanel extends Component {
  state = {
    valueByKey: { ...this.props.ADSRProps },
  }

  handleChangeInput = (key) => (event) => {
    const { updateADSRProps } = this.props;
    const nextValue = parseFloat(event.target.value, 10);

    if (!isNaN(nextValue)) {
      updateADSRProps(key)(nextValue);
    }
  }

  handleChangeKnob = (key) => (value) => {
    const { updateADSRProps } = this.props;
    const { valueByKey } = this.state;
    const roundedValue = Math.round(value * 20) / 20;
    const prevValue = valueByKey[key];
    const max = key === 'volMax' || key === 'decayLevel' ? 1 : 5;
    const maxDelta = max / 2;

    if (Math.abs(prevValue - roundedValue) <= maxDelta) {
      this.setState(state => ({
        valueByKey: {
          ...state.valueByKey,
          [key]: roundedValue,
        },
      }));
      updateADSRProps(key)(roundedValue);
    }
  }

  render() {
    const { ADSRProps } = this.props;

    const {
      attack,
      decay,
      decayLevel,
      sustain,
      release,
      volMax,
    } = ADSRProps;

    return (
      <div className="ASDRPanel">
        <div className="ASDRPanel__knobs">
          <div className="ASDRPanel__control">
            <label className="ASDRPanel__label">
              Volume
            </label>
            <div className="ASDRPanel__input ASDRPanel__input--knob">
              <Knob
                value={volMax}
                max={1.1}
                min={0}
                onChange={this.handleChangeKnob('volMax')}
                preciseMode={false}
                step={0.1}
                unlockDistance={0}
              />
            </div>
            <input
              className="ASDRPanel__input ASDRPanel__input--number"
              max={1.1}
              min={0}
              onChange={this.handleChangeInput('volMax')}
              step={0.1}
              type="number"
              value={volMax}
            />
          </div>
          <div className="ASDRPanel__control">
            <label className="ASDRPanel__label">
              Attack
            </label>
            <div className="ASDRPanel__input ASDRPanel__input--knob">
              <Knob
                value={attack}
                max={5.01}
                min={0}
                onChange={this.handleChangeKnob('attack')}
                preciseMode={false}
                step={0.05}
                unlockDistance={0}
              />
            </div>
            <input
              className="ASDRPanel__input ASDRPanel__input--number"
              max={5.01}
              min={0}
              onChange={this.handleChangeInput('attack')}
              step={0.05}
              type="number"
              value={attack}
            />
          </div>
          <div className="ASDRPanel__control">
            <label className="ASDRPanel__label">
              Decay
            </label>
            <div className="ASDRPanel__input ASDRPanel__input--knob">
              <Knob
                value={decay}
                max={5.01}
                min={0}
                onChange={this.handleChangeKnob('decay')}
                preciseMode={false}
                step={0.05}
                unlockDistance={0}
              />
            </div>
            <input
              className="ASDRPanel__input ASDRPanel__input--number"
              max={5.01}
              min={0}
              onChange={this.handleChangeInput('decay')}
              step={0.05}
              type="number"
              value={decay}
            />
          </div>
          <div className="ASDRPanel__control">
            <label className="ASDRPanel__label">
              Decay level
            </label>
            <div className="ASDRPanel__input ASDRPanel__input--knob">
              <Knob
                value={decayLevel}
                max={1.01}
                min={0}
                onChange={this.handleChangeKnob('decayLevel')}
                preciseMode={false}
                step={0.05}
                unlockDistance={0}
              />
            </div>
            <input
              className="ASDRPanel__input ASDRPanel__input--number"
              max={1.01}
              min={0}
              onChange={this.handleChangeInput('decayLevel')}
              step={0.05}
              type="number"
              value={decayLevel}
            />
          </div>
          <div className="ASDRPanel__control">
            <label className="ASDRPanel__label">
              Sustain
            </label>
            <div className="ASDRPanel__input ASDRPanel__input--knob">
              <Knob
                value={sustain}
                max={5.01}
                min={0}
                onChange={this.handleChangeKnob('sustain')}
                preciseMode={false}
                step={0.05}
                unlockDistance={0}
              />
            </div>
            <input
              className="ASDRPanel__input ASDRPanel__input--number"
              max={5.01}
              min={0}
              onChange={this.handleChangeInput('sustain')}
              step={0.05}
              type="number"
              value={sustain}
            />
          </div>
          <div className="ASDRPanel__control">
            <label className="ASDRPanel__label">
              Release
            </label>
            <div className="ASDRPanel__input ASDRPanel__input--knob">
              <Knob
                value={release}
                max={5.01}
                min={0}
                onChange={this.handleChangeKnob('release')}
                preciseMode={false}
                step={0.05}
                unlockDistance={0}
              />
            </div>
            <input
              className="ASDRPanel__input ASDRPanel__input--number"
              max={5.01}
              min={0}
              onChange={this.handleChangeInput('release')}
              step={0.05}
              type="number"
              value={release}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ASDRPanel;
