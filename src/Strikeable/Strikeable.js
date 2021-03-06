import React, { Component } from 'react';

import Draggable from '../Draggable.js';

class StrikeableDraggable extends Component {
  state = {
    dragging: false,
    height: null,
    initialTouchX: null,
    initialTouchY: null,
    parentX: null,
    parentY: null,
    touchX: null,
    touchY: null,
    width: null,
  }

  DraggableParent = React.createRef();

  handleMouseDown = (event) => {
    const { onStrikeStart } = this.props;

    if (this.DraggableParent.current) {
      const {
        offsetWidth: width,
        offsetHeight: height,
        offsetLeft: parentX,
        offsetTop: parentY,
      } = this.DraggableParent.current;

      const touchOffsetX = event.clientX;
      const touchOffsetY = event.clientY;
      const touchX = (touchOffsetX - parentX) / width;
      const touchY = (touchOffsetY - parentY) / height;

      this.setState({
        dragging: true,
        height,
        initialTouchX: touchX,
        initialTouchY: touchY,
        parentX,
        parentY,
        touchX: touchX,
        touchY: touchY,
        width,
        lastEvent: 'handleMouseDown',
      });

      onStrikeStart && onStrikeStart({ touchY });
    }
  }

  handleTouchStart = (event) => {
    const { onStrikeStart } = this.props;

    if (!event.touches || event.touches.length > 0) {

    }

    if (this.DraggableParent.current) {
      const {
        offsetWidth: width,
        offsetHeight: height,
        offsetLeft: parentX,
        offsetTop: parentY,
      } = this.DraggableParent.current;

      const touch = [...event.touches].pop() || {};
      const touchOffsetX = touch.clientX;
      const touchOffsetY = touch.clientY;
      const touchX = (touchOffsetX - parentX) / width;
      const touchY = (touchOffsetY - parentY) / height;

      this.setState({
        dragging: true,
        height,
        initialTouchX: touchX,
        initialTouchY: touchY,
        parentX,
        parentY,
        touchX: touchX,
        touchY: touchY,
        width,
        lastEvent: 'handleTouchStart',
      });

      onStrikeStart && onStrikeStart({ touchY });
    }
  }

  handleDrag = (event, nativeEvent) => {
    // const { onStrike } = this.props;

    const {
      dragging,
      height,
      parentX,
      parentY,
      width,
    } = this.state;

    if (!dragging || !this.DraggableParent.current || !this.DraggableParent.current.contains(nativeEvent.target)) {
      return;
    }

    const touchOffsetX = event.x;
    const touchOffsetY = event.y;
    const touchX = (touchOffsetX - parentX) / width;
    const touchY = (touchOffsetY - parentY) / height;

    if (touchX < 0 || touchX > 1 || touchY < 0 || touchY > 1) {
      this.setState({
        dragging: false,
      });

      this.handleDragEnd();

      return;
    }
    //
    // this.setState({
    //   touchX: touchX,
    //   touchY: touchY,
    //   lastEvent: 'handleDrag',
    // });
    //
    // onStrike && onStrike({ touchY });
  }

  handleDragEnd = () => {
    const { onStrikeEnd } = this.props;

    this.setState({
      dragging: false,
      lastEvent: 'handleDragEnd',
    });

    onStrikeEnd && onStrikeEnd();
  }

  render() {
    const { style } = this.props;

    return (
      <div
        ref={this.DraggableParent}
        style={{
          position: 'relative',
          ...style,
        }}
      >
        <Draggable
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
          position={{
            left: 0,
            top: 0,
          }}
        >
          {(event) => (
            <div>
            {/*
              <div style={{
                userSelect: 'none',
                textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
                fontSize: '11px',
                wordWrap: 'break-word',
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}>
                Drag me
                <br />
                X: {this.state.touchX}
                <br />
                Y: {this.state.touchY}
                <br />
                Last event: {this.state.lastEvent}
              </div>
            */}
              <div
                style={{
                  ...style,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0',
                }}
              />
            </div>
          )}
        </Draggable>
      </div>
    );
  }
}

export default StrikeableDraggable;
