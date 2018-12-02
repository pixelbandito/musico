import React, { Component } from 'react';
import { Holdable, defineHold } from 'react-touch';

class StrikeableHoldable extends Component {
  handleHoldComplete = (event) => {
    console.log('handleHoldComplete', { event });
  }

  handleHoldProgress = (event) => {
    console.log('handleHoldProgress', { event });
  }

  render() {
    return (
      <React.Fragment>
        <Holdable
          config={defineHold({updateEvery: 10, holdFor: 10000})}
          onHoldComplete={this.handleHoldComplete}
          onHoldProgress={this.handleHoldProgress}
          children={(event) => (
            <div style={{
                height: '100px',
                width: '100px',
                background: 'pink',
                userSelect: 'none',
                margin: '20px',
              }}
            >
              {event.holdProgress}
              {typeof window.webkitAudioContext}
            </div>
          )}
        />
        <Holdable
          config={defineHold({updateEvery: 10, holdFor: 10000})}
          onHoldComplete={this.handleHoldComplete}
          onHoldProgress={this.handleHoldProgress}
          children={(event) => (
            <div style={{
                height: '100px',
                width: '100px',
                background: 'pink',
                userSelect: 'none',
                margin: '20px',
              }}
            >
              {event.holdProgress}
              {typeof window.webkitAudioContext}
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

class StrikeableDraggable extends Component {
  state = {
    dragging: false,
    initialClientX: null,
    initialClientY: null,
    clientX: null,
    clientY: null,
  }

  handleDrag = (event) => {
    console.log('handleDrag', { event });
    this.setState({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  handleDragStart = (event) => {
    console.log('handleDragStart', { event });
    this.setState({
      dragging: true,
      initialClientX: event.clientX,
      initialClientY: event.clientY,
    });
  }

  handleDragEnd = (event) => {
    console.log('handleDragEnd', { event });
    this.setState({ dragging: false });
  }

  handleDragEnter = (event) => {
    console.log('handleDragEnter', { event });
  }

  handleDragLeave = (event) => {
    console.log('handleDragLeave', { event });
    this.setState({ dragging: false });
  }

  render() {
    const {
      initialClientX,
      initialClientY,
      clientX,
      clientY,
    } = this.state;

    return (
      <div
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        <button
          draggable
          onDrag={this.handleDrag}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
          style={{
            height: '100px',
            width: '100px',
            background: 'pink',
            userSelect: 'none',
            margin: '20px',
          }}
        >
          Drag me
          initialClientX: {initialClientX}
          initialClientY: {initialClientY}
          clientX: {clientX}
          clientY: {clientY}
        </button>
      </div>
    );
  }
}

class KeyBoard extends Component {
  render() {
    return (
      <div>
        <StrikeableDraggable />
        <StrikeableDraggable />
        <StrikeableHoldable />
      </div>
    );
  }
}

export default KeyBoard;
