import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberEvents from './NumberEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  state = {
    events: [],
    locations: [],
    number: 32
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const eventResult = (location === 'all') ?
        events => events.length <= eventCount :
        events.filter((event) => event.location === location) && events.length <= eventCount;

      this.setState({
        events: eventResult
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberEvents number={this.state.number} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
