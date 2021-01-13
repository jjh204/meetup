import React, { Component } from 'react';

class NumberEvents extends Component {

  state = {
    number: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      number: value,
    });
    const location = this.props.currentLocation;
    console.log(location);
    this.props.updateEvents(location, value);
  };

  render() {
    return (
      <div className="numberEvents">
        <label>Number of Events: </label>
        <input
          type="number"
          className="numberInput"
          value={this.state.number}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberEvents;