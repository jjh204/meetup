import React, { Component } from 'react';
import Moment from 'moment';

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
    const { summary, location, htmlLink, description, start } = this.props.event;
    const startDate = Moment(start.dateTime).format('DD-MMMM-YYYY, h:mm a');

    return <div className="event">
      <div className="eventOverview">
        <h1 className="summary">{summary}</h1>
        <p className="startDate">{startDate} (Central European Time)</p>
        <p className="location">Location: {location}</p>
        {!details && <button className="showDetails-btn" onClick={() => this.handleDetails()}>Show Details</button>}
        {details && <button className="hideDetails-btn" onClick={() => this.handleDetails()}>Hide Details</button>}
      </div>
      {details &&
        <div className="eventDetails">
          <h2 className="about">Event Details:</h2>
          <p className="link"><a href={htmlLink} target="blank">See Google Calendar Invite</a></p>
          <p className="description">{description}</p>
        </div>
      }
    </div>;
  }
}

export default Event;