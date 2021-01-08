import React, { Component } from 'react';

class Event extends Component {
  state = {
    details: false,
  }

  handleDetails = () => {
    if (this.state.details === false) {
      this.setState({ details: true });
    }
    else {
      this.setState({ details: false });
    }
  }

  render() {
    const details = this.state.details;
    const event = this.props.event;

    return <div className="event">
      <div className="eventOverview">
        <h1 className="summary">{event.summary}</h1>
        <p className="startDate">{event.start.dateTime} | {event.start.timeZone}</p>
        <p className="location">{event.location}</p>
        {!details && <button className="showDetails-btn" onClick={() => this.handleDetails()}>Show Details</button>}
        {details && <button className="hideDetails-btn" onClick={() => this.handleDetails()}>Hide Details</button>}
      </div>
      {details &&
        <div className="eventDetails">
          <h2 className="about">Event Details:</h2>
          <p className="link"><a href={event.htmlLink} target="blank">Go to Google Calendar</a></p>
          <p className="description">{event.description}</p>
        </div>
      }
    </div>;
  }
}

export default Event;