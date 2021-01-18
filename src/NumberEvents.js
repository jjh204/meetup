import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberEvents extends Component {

  state = {
    number: 32,
    errorText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      number: value,
    });
    const location = this.props.currentLocation;
    this.props.updateEvents(location, value);

    if (value < 1 || value > 32) {
      this.setState({ errorText: 'number must be selected' });
    } else {
      this.setState({ errorText: '' });
    }
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
        <ErrorAlert className="errorText" text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberEvents;