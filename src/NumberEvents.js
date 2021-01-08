import React, { Component } from 'react';

class NumberEvents extends Component {

  state = {
    number: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      number: value,
    });
    const eventCount = this.state.number;
    this.props.updateEvents(eventCount);
  };

  render() {
    return (
      <div className="numberEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          className="numberInput"
          value={this.state.number}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberEvents;