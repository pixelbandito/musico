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
      });

      onStrikeStart && onStrikeStart({ touchY });
    }
  }

  handleTouchStart = (event, ...rest) => {
    const { onStrikeStart } = this.props;
    onStrikeStart && onStrikeStart();
  }

  handleDrag = (event, ...rest) => {
    const { onStrike } = this.props;

    const {
      dragging,
      height,
      parentX,
      parentY,
      width,
    } = this.state;

    if (dragging) {
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

      this.setState({
        touchX: touchX,
        touchY: touchY,
      });

      onStrike && onStrike({ touchY });
    }
  }

  handleDragEnd = () => {
    const { onStrikeEnd } = this.props;

    this.setState({
      dragging: false,
    });

    onStrikeEnd && onStrikeEnd();
  }

  render() {
    return (
      <div
        ref={this.DraggableParent}
        style={{
          display: 'inline-block',
          height: '100px',
          width: '100px',
          background: 'pink',
          userSelect: 'none',
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
              Drag me
              <br />
              X: {this.state.touchX}
              <br />
              Y: {this.state.touchY}
            </div>
          )}
        </Draggable>
      </div>
    );
  }
}

export default StrikeableDraggable;
