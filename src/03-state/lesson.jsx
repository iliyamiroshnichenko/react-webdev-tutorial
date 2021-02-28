import React, { Component } from "react";

class CounterButton extends Component {
  state = {
    counter: 0,
  };
  handleClickPlus = () => {
    this.setState(({ counter }) => ({
      counter: (counter += 1),
    }));
  };
  handleClickMinus = () => {
    this.setState(({ counter }) => ({
      counter: (counter -= 1),
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>{counter}</div>
        <button onClick={this.handleClickPlus}>+1</button>
        <button onClick={this.handleClickMinus}>-1</button>
      </div>
    );
  }
}

export default CounterButton;
